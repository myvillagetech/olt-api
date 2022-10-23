import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRatingDocument } from 'src/ratings/rating.schema';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Payment } from './payment.dto';
import { IPaymentDocument } from './payment.schema';

@Injectable()
export class PaymentsService {
    constructor(@InjectModel(MODEL_ENUMS.PAYMENT) private paymentModel: Model<IPaymentDocument>) { }
    
    async addPayment(
        payload: Payment
    ): Promise<any> {
        try {
            const payment = new this.paymentModel(payload);
            return payment.save();
        } catch (error) {
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

}
