import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { PaymentSchema } from './payment.schema';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PayoutSchema } from './payout.schema';

@Module({
    imports: [
        ScheduleModule,
        MongooseModule.forFeature([
            { name: MODEL_ENUMS.PAYMENT, schema: PaymentSchema },
            { name: MODEL_ENUMS.PAYOUT, schema: PayoutSchema }
        ])],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})
export class PaymentsModule { }
