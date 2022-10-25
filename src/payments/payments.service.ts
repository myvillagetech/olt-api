import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ScheduleService } from 'src/schedule/schedule.service';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Payment } from './payment.dto';
import { IPaymentDocument } from './payment.schema';
import { PaymentSearchCriteria } from './paymentSearchCriteria';

@Injectable()
export class PaymentsService {
    constructor(private readonly scheduleService: ScheduleService,
        @InjectModel(MODEL_ENUMS.PAYMENT) private paymentModel: Model<IPaymentDocument>) { }

    async addPayment(
        payload: Payment
    ) {
        try {
            const payment = new this.paymentModel(payload);
            const results = await payment.save();
            await this.scheduleService.updatedPaymentDetails(payload.scheduleIds, results["_id"])
            return results;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

    async getPaymentDetails(
        paymentId: string
    ) {
        console.log(paymentId)
        try {
            return this.paymentModel.aggregate([
                {
                    $match: { '_id': new Types.ObjectId(paymentId) }
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "Schedules",
                    }
                }
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

    async getPaymentsCriteria(
        criteria: PaymentSearchCriteria
    ) {
        try {
            const preJoinFilters = [];
            if (criteria.paymentId) {
                preJoinFilters.push({ 'paymentId': criteria.paymentId })
            }
            const postJoinFilters = [];

            if (criteria.studentId) {
                postJoinFilters.push({ 'schedules.student': new Types.ObjectId(criteria.studentId) })
            }

            if (criteria.tutorId) {
                postJoinFilters.push({ 'schedules.tutor': new Types.ObjectId(criteria.tutorId) })
            }
            
            return this.paymentModel.aggregate([
                {
                    $match: preJoinFilters.length > 0 ? {$and: preJoinFilters} : {}
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "schedules",
                    }
                },
                {
                    $match: postJoinFilters.length > 0 ? {$and: postJoinFilters} : {}
                },
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

}
