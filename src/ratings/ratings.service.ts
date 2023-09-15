import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { RatingDto, TutorAndStudent } from "./rating.dto";
import { IRatingDocument } from "./rating.schema";

@Injectable()
export class RatingsService {
  constructor(
    @InjectModel(MODEL_ENUMS.RATING) private ratingModel: Model<IRatingDocument>
  ) {}

  async addOrUpdateRating(payload: RatingDto) {
    try {
      const rating = await this.ratingModel.findOneAndUpdate(
        {
          student: new Types.ObjectId(payload.student),
          tutor: new Types.ObjectId(payload.tutor),
        },
        payload,
        { new: true, upsert: true }
      );
      return rating.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getTutorRatingByStudent(payload: TutorAndStudent) {
    try {
      const rating = await this.ratingModel.findOne({
        student: new Types.ObjectId(payload.student),
        tutor: new Types.ObjectId(payload.tutor),
      });
      if (!rating) {
        throw new Error("Rating Not found");
      }
      return rating;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRatingByTutorId(tutorId: string) {
    try {
      const ratings = await this.ratingModel.aggregate([
        { $match: { tutor: new Types.ObjectId(tutorId) } },
        {
          $lookup: {
            from: "users",
            localField: "student",
            foreignField: "_id",
            as: "student",
            pipeline: [{ $project: { password: 0, userId: 0 } }],
          },
        },
      ]);
      return ratings;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRatingMetricsByTutorId(tutorId: string) {
    try {
      const ratings = await this.ratingModel.aggregate([
        { $match: { tutor: new Types.ObjectId(tutorId) } },
        {
          $group: {
            _id: "$rating",
            numberOfRatings: { $sum: 1 },
          },
        },
        {
          $sort: { _id: -1 },
        },
      ]);
      return ratings;
    } catch (error) {
      throw new Error(error.message);
    }
}

    async getAllRatingMetrics() {
        try {
            const rating = await this.ratingModel.countDocuments()
            return rating;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getTopReviews() {
        try {
            const rating = await this.ratingModel.find()
            .sort({ rating: -1 }) 
            .limit(5) 
            .select({ rating: 1, review: 1 ,tutor: 1, student:1})
            .populate('student tutor')
            .exec();
            return rating;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    async getRatingByStudentId(studentId: string) {
        try {
            const ratings = await this.ratingModel.aggregate([
                { $match: { student: new Types.ObjectId(studentId) } },
                {
                    $lookup: {
                        from: "users",
                        localField: "tutor",
                        foreignField: "_id",
                        as: "tutor",
                        "pipeline": [
                            { "$project": { "password": 0, "userId": 0}}
                        ]
                    }
                },
                
            ]);
            return ratings;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
