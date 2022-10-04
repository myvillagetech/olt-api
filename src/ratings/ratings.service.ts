import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { RatingDto, TutorAndStudent } from './rating.dto';
import { IRatingDocument } from './rating.schema';

@Injectable()
export class RatingsService {
    constructor(@InjectModel(MODEL_ENUMS.RATING) private ratingModel: Model<IRatingDocument>) { }

    async addOrUpdateRating(payload: RatingDto) {
        try {
            const rating = await this.ratingModel.findOneAndUpdate({
                student: new Types.ObjectId(payload.student),
                tutor: new Types.ObjectId(payload.tutor)
            },
                payload, { new: true, upsert: true });
            return rating.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    async getTutorRatingByStudent(payload: TutorAndStudent) {
        try {
            const rating = await this.ratingModel.findOne({
                student: new Types.ObjectId(payload.student),
                tutor: new Types.ObjectId(payload.tutor)
            });
            if(!rating) {
                throw new Error("Rating Not found")
            }
            return rating;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
