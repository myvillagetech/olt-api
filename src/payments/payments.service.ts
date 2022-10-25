import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ScheduleService } from 'src/schedule/schedule.service';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Payment } from './payment.dto';
import { IPaymentDocument } from './payment.schema';

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

}
