import { HttpException, HttpStatus, Inject, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { BankAccount } from "src/shared/DTOs/BankAccount";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { TutorProfileDto } from "./tutorProfile.dto";
import { IAvilableSlots, ISubjects, ITutorProfileDocument } from "./tutorProfile.schema";
import { TutorSearchCriteria } from "./tutorSearchCriteria.dto";


@Injectable()
export class TutorProfileService {
    constructor(
        @InjectModel(MODEL_ENUMS.PROFILE) private profileModel: Model<ITutorProfileDocument>,
    ) { }

    async createTutorProfile(profilePayload: TutorProfileDto): Promise<TutorProfileDto | UnprocessableEntityException> {
        try {
            const profile = new this.profileModel(profilePayload);
            return profile.save();
        }
        catch (error) {
            throw new Error("error.message");
        }
    }

    async getTutorProfileById(profileId: string): Promise<ITutorProfileDocument> {
        const profileDetails = await this.profileModel.findById(profileId).exec();
        if (!profileDetails) {
            throw new NotFoundException('Profile data not found!');
        }
        return profileDetails;
    }

    async updateTutorProfile(profilePayload: TutorProfileDto, profileId: string): Promise<TutorProfileDto | UnprocessableEntityException> {
        const profile = await this.profileModel.findByIdAndUpdate(profileId, profilePayload, { new: true }).exec()
        if (!profile) {
            throw new HttpException(`Profile #${profileId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return profile;
    }

    async updateTutorSlots(slots: IAvilableSlots[], profileId: string): Promise<TutorProfileDto | UnprocessableEntityException> {
        const profile = await this.profileModel.findOneAndUpdate({ userId: profileId }, { slots: slots }, { new: true }).exec()
        if (!profile) {
            throw new HttpException(`Profile #${profileId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return profile;
    }

    // REfactor :: https://www.mongodb.com/docs/manual/reference/operator/update/positional-all/
    async updateTutorBankDetails(account: BankAccount, profileId: string, accontId: string):
    Promise<any> {

        const userProfile = await this.profileModel.findOne({ userId: profileId });

        const bankAccounts = userProfile.bankAccountDetails;

        console.log(userProfile)
        if (!bankAccounts || bankAccounts.length === 0) {
            console.log('no accounts')
            userProfile.bankAccountDetails = [
                account
            ];
            console.log(userProfile)
            return await this.profileModel.findByIdAndUpdate(userProfile._id, {'bankAccountDetails': userProfile.bankAccountDetails});
        } else {
            const bankAccount = userProfile.bankAccountDetails.find((ac: any) => {
                console.log(ac._id);
                console.log(ac._id.toString());
                console.log(accontId);
                return ac._id.toString() === accontId;
            });

            if(bankAccount) {
                let index = userProfile.bankAccountDetails.findIndex((ac: any) => ac._id.toString() === accontId);
                userProfile.bankAccountDetails[index] = {...bankAccount, ...account};
            } else {
                userProfile.bankAccountDetails.push(account)
            }
            console.log(userProfile)
            return await this.profileModel.findByIdAndUpdate(userProfile._id, {'bankAccountDetails': userProfile.bankAccountDetails});
        }

        const profile = await this.profileModel.findOneAndUpdate
            ({ userId: profileId, bankAccountDetails: { '$elemMatch': { '_id': accontId } } }
                , { bankAccountDetails: account },
                { new: true }).exec()
        if (!profile) {
            throw new HttpException(`Profile #${profileId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return profile;
    }

    async getProfileByUserId(userId: string): Promise<ITutorProfileDocument> {
        const profileDetails = await this.profileModel.aggregate([
            { $match: { 'userId': new Types.ObjectId(userId) } },
            {
                $lookup: {
                    from: "ratings",
                    localField: "userId",
                    foreignField: "tutor",
                    as: "ratings",
                    pipeline: [{
                        $group: {
                            _id: '$tutor',
                            avg: { $avg: '$rating' },
                            count: { $count: {} }
                        }
                    }]
                }
            }
        ])
        if (!profileDetails) {
            throw new NotFoundException('Profile Data not Found!');
        }
        return profileDetails[0];
    }

    async getAllProfilesByCourseName(CourseName: string): Promise<ITutorProfileDocument[]> {
        const courses = await this.profileModel.find({
            "subject.courseName": CourseName
        })
        // const courses = await this.profileModel.find()
        if (!courses) {
            throw new NotFoundException('Profile Data not Found!');
        }
        return courses
    }

    async searchProfilesByCriteria(criteria: TutorSearchCriteria): Promise<
        { profiles: ITutorProfileDocument[], metrics: any }> {
        const search = { $and: [] };

        let profileDetails;
        try {
            criteria.states = criteria.states.filter(s => (s !== '' && s !== null && s !== undefined));

            if (criteria.states && criteria.states.length > 0) {
                search.$and.push({
                    'state': { $in: criteria.states.map(s => new RegExp(s, "i")) }
                })
            }
            if (criteria.rateRange && (criteria.rateRange.from || criteria.rateRange.to)) {
                const ratefilter: any = {};

                if (criteria.rateRange.from) {
                    ratefilter.$gte = criteria.rateRange.from;
                }

                if (criteria.rateRange.to) {
                    ratefilter.$lte = criteria.rateRange.to;
                }

                search.$and.push({
                    'hourlyRate': ratefilter
                })
            }

            if (criteria.cource) {
                search.$and.push({
                    'subject':
                        { "$elemMatch": { 'courseName': { '$regex': criteria.cource, '$options': 'i' } } }
                });
            }

            if (criteria.days && criteria.days.length > 0) {
                search.$and.push({
                    'slots': {
                        "$elemMatch": {
                            'day': { $in: criteria.days },
                            $nor: [{ 'slots': { $size: 0 } }, { 'slots': { $exists: false } }]
                        }
                    }

                });
            }


            let paginationProps: any = [{ $match: search.$and.length > 0 ? search : {} }];
            if ((criteria.pageSize || criteria.pageSize > 0) && (criteria.pageNumber || criteria.pageNumber === 0)) {
                paginationProps.push({ $skip: criteria.pageNumber * criteria.pageSize });
                paginationProps.push({ $limit: criteria.pageSize });
            }

            profileDetails = await this.profileModel.aggregate([
                {
                    $lookup: {
                        from: "ratings",
                        localField: "userId",
                        foreignField: "tutor",
                        as: "ratings",
                        pipeline: [{
                            $group: {
                                _id: '$tutor',
                                avg: { $avg: '$rating' },
                                count: { $count: {} }
                            }
                        }]
                    },
                },
                {
                    $facet: {
                        profiles: paginationProps,
                        metrics: [
                            { $match: search.$and.length > 0 ? search : {} },
                            { $count: 'totalCount' }
                        ]
                    }
                }])

            return profileDetails;
        } catch (error) {
            console.log(error);
        }
    }

}