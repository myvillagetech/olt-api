import { HttpException, HttpStatus, Inject, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { TutorProfileDto } from "./tutorProfile.dto";
import { ISlots, ISubjects, ITutorProfileDocument } from "./tutorProfile.schema";


@Injectable()
export class TutorProfileService {
    constructor(
        @InjectModel(MODEL_ENUMS.PROFILE) private  profileModel : Model<ITutorProfileDocument>,
    ) {}

    async createTutorProfile(profilePayload : TutorProfileDto) : Promise<TutorProfileDto | UnprocessableEntityException>{
        console.log("service",profilePayload);
        try{
            const profile = new this.profileModel(profilePayload);
            return profile.save();
        }
        catch (error) {
            throw new HttpException(`Something went wrong ... Please try again`, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    async getTutorProfileById(profileId:string): Promise<ITutorProfileDocument> {
        const profileDetails = await this.profileModel.findById(profileId).exec();
        if (!profileDetails) {
            throw new NotFoundException('Profile data not found!');
        }
        return profileDetails;
    }

    async updateTutorProfile(profilePayload : TutorProfileDto, profileId : string) : Promise<TutorProfileDto | UnprocessableEntityException>{
        const profile = await this.profileModel.findByIdAndUpdate(profileId,profilePayload).exec()
        if (!profile) {
            throw new HttpException(`Course #${profileId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return profile;
    }

    async updateTutorSlots(slots : ISlots[], profileId : string) : Promise<TutorProfileDto | UnprocessableEntityException>{
        const profile = await this.profileModel.findByIdAndUpdate(profileId,{slots: slots}, {new: true}).exec()
        if (!profile) {
            throw new HttpException(`Course #${profileId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return profile;
    }

    async getProfileByUserId(userId : string) : Promise<ITutorProfileDocument> {
        const profileDetails = await this.profileModel.findOne({userId : userId}).exec();
        if(!profileDetails){
            throw new NotFoundException('Profile Data not Found!');
        }
        return profileDetails;
    }

    async getAllProfilesByCourseName(CourseName : string) : Promise<ITutorProfileDocument[]> {
        const courses = await this.profileModel.find({
            "subject.courseName" : CourseName
        })
       // const courses = await this.profileModel.find()
        if(!courses){
            throw new NotFoundException('Profile Data not Found!');
        }
        return courses
    }


}