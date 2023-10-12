import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Schema, Types } from "mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { ScheduleDto, updateScheduleDto } from "./dto/schedule.dto";
import { ScheduleSearchCriteria } from "./dto/scheduleSearchCriteria";
import { IScheduleDocument } from "./schedule.schema";
import { Status } from "./schedule.status";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(MODEL_ENUMS.SCHEDULE)
    private scheduleModel: Model<IScheduleDocument>,
  ) { }

  getScheduleModel(): Model<IScheduleDocument> {
    return this.scheduleModel;
  }
  async createSchedule(
    schedulePayload: ScheduleDto
  ): Promise<ScheduleDto | IScheduleDocument | UnprocessableEntityException> {
    try {
      const schedule = new this.scheduleModel(schedulePayload);
      return schedule.save();
    } catch (error) {
      throw new HttpException(
        `Something went wrong ... Please try again`,
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
  }

  async deleteSchedule(
    scheduleId: string
  ): Promise<
    IScheduleDocument | NotFoundException | UnprocessableEntityException
  > {
    const schedule = await this.scheduleModel
      .findByIdAndDelete(scheduleId)
      .exec();
    if (!schedule) {
      throw new NotFoundException(`Schedule #${scheduleId} not found`);
    }
    return schedule;
  }

  async updateSchedule(
    schedulePayload: updateScheduleDto,
    scheduleId: string
  ): Promise<ScheduleDto | IScheduleDocument | UnprocessableEntityException> {
    
    if(schedulePayload.status==='REJECTED' && !schedulePayload.rejectedNote ){
      throw new HttpException(
        `Reject Note Is Required`,
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    if(schedulePayload.status==='CANCELLED' && !schedulePayload.cancelNote ){
      throw new HttpException(
        `Cancel Note Is Required`,
        HttpStatus.NOT_ACCEPTABLE
      );
    }

    const schedule = await this.scheduleModel
      .findByIdAndUpdate(scheduleId, schedulePayload, { new: true })
      .exec();
    if (!schedule) {
      throw new HttpException(
        `Schedule #${scheduleId} not found`,
        HttpStatus.NOT_MODIFIED
      );
    }
    return schedule;
  }

  async updateScheduleStatus(
    scheduleId: string,
    status: string,
    props: object
  ): Promise<ScheduleDto | IScheduleDocument | UnprocessableEntityException> {
    const schedule = await this.scheduleModel
      .findByIdAndUpdate(scheduleId, {status: status, ...props}, { new: true })
      .exec();
    if (!schedule) {
      throw new HttpException(
        `Schedule #${scheduleId} not found`,
        HttpStatus.NOT_MODIFIED
      );
    }
    return schedule;
  }

  async updatedPaymentDetails(schduleIDs: string[], paymentId: Types.ObjectId, status : string) {
    const options: any = schduleIDs.map(sId => {
      return {
        updateOne: {
          filter: { _id: sId },
          update: { paymentId: paymentId , status : status }
        }
      }
    })
    await this.scheduleModel.bulkWrite(options);
  }

  
  async addAttachments(scheduleId: string, attachments:any[]) {
    const attachmentsData:any = await this.scheduleModel.findById(scheduleId).lean()
    if(attachmentsData){
      attachments.push(...attachmentsData.attachments)
    }
    const newAttachments = await this.scheduleModel.findByIdAndUpdate(scheduleId, {attachments}, { new: true })
   .exec();
   return newAttachments
  }

  async updatedtutorPayoutDetails(schduleIDs: string[], paymentId: Types.ObjectId) {
    const options: any = schduleIDs.map(sId => {
      return {
        updateOne: {
          filter: { _id: sId },
          update: { payoutId: paymentId }
        }
      }
    })

    await this.scheduleModel.bulkWrite(options);
  }

  // async updatePaymentInfoSchedule(
  //   payload: any,
  //   scheduleId: string
  // ): Promise<ScheduleDto | IScheduleDocument | UnprocessableEntityException> {
  //   const schedule = await this.scheduleModel
  //     .findOneAndUpdate({ _id: new Types.ObjectId(scheduleId) },
  //       { $set: { "paymentInformation": payload } }, { new: true })
  //     .exec();
  //   if (!schedule) {
  //     throw new HttpException(
  //       `Schedule #${scheduleId} not found`,
  //       HttpStatus.NOT_MODIFIED
  //     );
  //   }
  //   return schedule;
  // }

  async getScheduleByScheduleId(
    scheduleId: string
  ): Promise<IScheduleDocument> {
    const schedule = await this.scheduleModel.aggregate([
      { $match: { _id: new Types.ObjectId(scheduleId) } },
      {
        $lookup: {
          from: "profiles",
          localField: "tutor",
          foreignField: "userId",
          as: "tutor",
          pipeline: [{ $project: { createdAt: 0, updatedAt: 0 } }],
        },
      },
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

    if (!schedule) {
      throw new HttpException(
        `Schedule ${scheduleId} not found`,
        HttpStatus.NOT_FOUND
      );
    }
    return schedule[0];
  }

  async getScheduleByStatus(user): Promise<IScheduleDocument> {
    const query :any={} 
    if(user.student){
      query.student=new Types.ObjectId(user.student)
    }
    if(user.tutor){
      query.tutor=new Types.ObjectId(user.tutor)
    }
    if(user.student || user.tutor){
      const schedule: any = await this.scheduleModel.aggregate([
        { $match: query },
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: null,
            totalDocuments: { $sum: "$count" },
            statusMetrics: { $push: { status: "$_id", count: "$count" } },
          },
        },
        {
          $project: {
            _id: 0,
            totalDocuments: 1,
            statusMetrics: 1,
          },
        },
      ]);
      return schedule;
  }
  else{
    throw new HttpException(
      `Schedule metrics were not found`,
      HttpStatus.NOT_MODIFIED
    );
  }
  }
  
  async getAdminScheduleByStatus() : Promise<IScheduleDocument> {
    const schedule :any = await this.scheduleModel.aggregate([
            { $group: { 
                _id:"$status", 
                count: {$sum : 1 }, 
               }
             },
             {
              $group: {
                _id: null,
                totalDocuments: { $sum: "$count" },
                statusMetrics: { $push: { status: "$_id", count: "$count" } },
              },
            },
            {
              $project: {
                _id: 0,
                totalDocuments: 1,
                statusMetrics: 1,
              },
            },
        ]); 
        return schedule;
  }

  async cancelScheduleByScheduleId(
    scheduleId: string
  ): Promise<IScheduleDocument> {
    const schedule = await this.scheduleModel.findById(scheduleId).exec();
    if (!schedule) {
      throw new HttpException(
        `Schedule ${scheduleId} not Found`,
        HttpStatus.NOT_FOUND
      );
    } else {
      schedule.status = Status.CANCELLED;
      return await this.scheduleModel.findByIdAndUpdate(scheduleId, schedule);
    }
  }

  async getAllSchedulesBySearchByCriteria(
    criteria: ScheduleSearchCriteria
  ): Promise<{ schedules: Array<IScheduleDocument>; metrics: any }> {
    let result;
    try {
      const search = { $and: [] };

      if (criteria.subjects && criteria.subjects.length > 0) {
        search.$and.push({
          subjects: {
            $elemMatch: {
              courseName: {
                $in: criteria.subjects.map((s) => new RegExp(s, "i")),
              },
            },
          },
        });
      }

      if (criteria.dateRange && (criteria.dateRange.from || criteria.dateRange.to)) {
        const searchOption: any = {};
        if(criteria.dateRange.from) {
          searchOption.$gte = new Date(criteria.dateRange.from);
        }
        if(criteria.dateRange.to) {
          searchOption.$lte = new Date(criteria.dateRange.to);
        }
        search.$and.push({
          slots: {
            $elemMatch: {
                  date: searchOption
              },
          },
        });
      }

      if (criteria.studentIds && criteria.studentIds.length > 0) {
        search.$and.push({
          "student._id": {
            $in: criteria.studentIds.map((s) => new Types.ObjectId(s)),
          },
        });
      }

      if (criteria.status && criteria.status.length > 0) {
        search.$and.push({
          status: { $in: criteria.status.map((s) => new RegExp(s, "i")) },
        });
      }

      if (criteria.tutorIds && criteria.tutorIds.length > 0) {
        search.$and.push({
          "tutor._id": {
            $in: criteria.tutorIds.map((s) => new Types.ObjectId(s)),
          },
        });
      }

      if (criteria.searchTerm) {
        search.$and.push({
          "tutor.firstName": { $regex: new RegExp(criteria.searchTerm, "i") }
        });
      }


      let paginationProps: any = [
        { $match: search.$and.length > 0 ? search : {} },
      ];
      if (
        (criteria.pageSize || criteria.pageSize > 0) &&
        (criteria.pageNumber || criteria.pageNumber === 0)
      ) {
        paginationProps.push({
          $skip: criteria.pageNumber * criteria.pageSize,
        });
        paginationProps.push({ $limit: criteria.pageSize });
      }

      let sortObject;
      if (criteria.sortField) {
        sortObject = {};
        sortObject[criteria.sortField] = criteria.sortOrder;
        paginationProps.push({ $sort: sortObject });
      }

      result = await this.scheduleModel.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "tutor",
            foreignField: "_id",
            as: "tutor",
            pipeline: [{ $project: { password: 0, userId: 0 } }],
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "student",
            foreignField: "_id",
            as: "student",
            pipeline: [{ $project: { password: 0, userId: 0 } }],
          },
        },
        {
          $facet: {
            schedules: paginationProps,
            metrics: [
              { $match: search.$and.length > 0 ? search : {} },
              { $count: "totalCount" },
            ],
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
    result[0].schedules.forEach((s) => {
      s.student = s.student[0];
      s.tutor = s.tutor[0];
    });
    return result;
  }

  // getUnPaidSchdulesByTutorId(tutorId: string) {
  //   this.scheduleModel.aggregate([
  //     { $match: { tutor: tutorId, paymentInformation: { $or: [{ $ne: null }, { $exists: false }] } } }
  //   ]);
  // }

}
