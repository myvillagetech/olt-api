import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
            console.log(payload);
            const payment = new this.paymentModel(payload);
            const results=  await payment.save();
            console.log(results);
            console.log(results["_id"]);
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

}
