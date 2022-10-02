import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { ScheduleDto } from './dto/schedule.dto';
import { ScheduleSearchCriteria } from './dto/scheduleSearchCriteria';
import { IScheduleDocument } from './schedule.schema';
import { Status } from './schedule.status';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(MODEL_ENUMS.SCHEDULE) private scheduleModel: Model<IScheduleDocument>,
  ) { }

  async createSchedule(schedulePayload: ScheduleDto): Promise<ScheduleDto | UnprocessableEntityException> {
    try {
      const schedule = new this.scheduleModel(schedulePayload);
      return schedule.save();
    }
    catch (error) {
      throw new HttpException(`Something went wrong ... Please try again`, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  async deleteSchedule(scheduleId: string): Promise<IScheduleDocument | NotFoundException | UnprocessableEntityException> {
    const schedule = await this.scheduleModel.findByIdAndDelete(scheduleId).exec();
    if (!schedule) {
      throw new NotFoundException(`Schedule #${scheduleId} not found`)
    }
    return schedule;
  }

  async updateSchedule(schedulePayload: ScheduleDto, scheduleId: string): Promise<ScheduleDto | UnprocessableEntityException> {
    const schedule = await this.scheduleModel.findByIdAndUpdate(scheduleId, schedulePayload, { new: true }).exec()
    if (!schedule) {
      throw new HttpException(`Schedule #${scheduleId} not found`, HttpStatus.NOT_MODIFIED);
    }
    return schedule;
  }

  async getScheduleByScheduleId(scheduleId: string): Promise<IScheduleDocument> {
    const schedule = await this.scheduleModel.findById(scheduleId).exec()
    if (!schedule) {
      throw new HttpException(`Schedule ${scheduleId} not found`, HttpStatus.NOT_FOUND);
    }
    return schedule
  }

  async cancelScheduleByScheduleId(scheduleId: string): Promise<IScheduleDocument> {
    const schedule = await this.scheduleModel.findById(scheduleId).exec()
    if (!schedule) {
      throw new HttpException(`Schedule ${scheduleId} not Found`, HttpStatus.NOT_FOUND);
    }
    else {
      schedule.status = Status.CANCELLED;
      return await this.scheduleModel.findByIdAndUpdate(scheduleId, schedule);
    }
  }

  // async getScheduleByTutorId(tutorId: string): Promise<Array<IScheduleDocument>> {
  //   const schedule = await this.scheduleModel.find({ tutorId: tutorId }).exec();
  //   if (!schedule) {
  //     throw new HttpException(`Schedule ${tutorId} not Found`, HttpStatus.NOT_FOUND);
  //   }
  //   return schedule
  // }

  // async getScheduleByStart(start: string): Promise<Array<IScheduleDocument>> {
  //   const schedule = await this.scheduleModel.find({ start: start }).exec();
  //   if (!schedule) {
  //     throw new HttpException(`Schedule ${start} not Found`, HttpStatus.NOT_FOUND);
  //   }
  //   return schedule
  // }

  // async getScheduleByEnd(end: string): Promise<Array<IScheduleDocument>> {
  //   const schedule = await this.scheduleModel.find({ end: end }).exec();
  //   if (!schedule) {
  //     throw new HttpException(`Schedule ${end} not Found`, HttpStatus.NOT_FOUND);
  //   }
  //   return schedule
  // }

  // async getSchedulesByStudentId(studentId: string): Promise<Array<IScheduleDocument>> {
  //   const schedules = await this.scheduleModel.find({ studentId: studentId }).exec();
  //   if (!schedules) {
  //     throw new HttpException(`Schedule ${studentId} not Found`, HttpStatus.NOT_FOUND);
  //   }
  //   return schedules
  // }

  async searchProfilesByCriteria(criteria: ScheduleSearchCriteria):
    Promise<{schedules: Array<IScheduleDocument>, metrics: any}> {
    let result;
    try {
      const search = { $and: [] };

      if (criteria.subjects && criteria.subjects.length > 0) {
        search.$and.push({ 'subjects': { $elemMatch: { $in: criteria.subjects.map(s => new RegExp(s, "i")) } } });
      }

      if (criteria.studentIds && criteria.studentIds.length > 0) {
        search.$and.push({ 'studentId': { $in: criteria.studentIds.map(s => new RegExp(s, "i")) } })
      }

      if (criteria.status && criteria.status.length > 0) {
        search.$and.push({ 'status': { $in: criteria.status.map(s => new RegExp(s, "i")) } })
      }

      if (criteria.tutorIds && criteria.tutorIds.length > 0) {
        search.$and.push({ 'tutorId': { $in: criteria.tutorIds.map(s => new RegExp(s, "i")) } })
      }

      let paginationProps: any = [{ $match: search.$and.length > 0 ? search : {} }];
      if ((criteria.pageSize || criteria.pageSize > 0) && (criteria.pageNumber || criteria.pageNumber === 0)) {
        paginationProps.push({ $skip: criteria.pageNumber * criteria.pageSize });
        paginationProps.push({ $limit: criteria.pageSize });
      }

      let sortObject;
      if (criteria.sortField) {
        sortObject = {};
        sortObject[criteria.sortField] = criteria.sortOrder;
        paginationProps.push({ $sort: sortObject});
        console.log(sortObject)
      }

      console.log(paginationProps)

      result = await this.scheduleModel.aggregate([{
        $facet: {
          schedules: paginationProps,
          metrics: [
            { $match: search.$and.length > 0 ? search : {} },
            { $count: 'totalCount' }
          ]
        }
      }])
    } catch (error) {
      console.log(error);
    }
    return result;
  }


}
