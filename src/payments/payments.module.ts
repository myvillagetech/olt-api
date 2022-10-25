import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { PaymentSchema } from './payment.schema';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
    imports: [
        ScheduleModule,
        MongooseModule.forFeature([{ name: MODEL_ENUMS.PAYMENT, schema: PaymentSchema }])],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})
export class PaymentsModule { }
