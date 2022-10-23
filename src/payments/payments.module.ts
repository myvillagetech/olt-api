import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingSchema } from 'src/ratings/rating.schema';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { PaymentSchema } from './payment.schema';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: MODEL_ENUMS.PAYMENT, schema: PaymentSchema }])],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})
export class PaymentsModule { }
