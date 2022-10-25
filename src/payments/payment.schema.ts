import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ScheduleSchemaCreator } from "src/schedule/schedule.schema";

@Schema({
    timestamps : true
})

export class PaymentSchemaCreator {
    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Schedule',
        required : true
    })
    scheduleIds: [ScheduleSchemaCreator];

    @Prop({
        required : true
    })
    paymentId: string;

    @Prop({
        required : true
    })
    status: string;

    @Prop({
        required : true
    })
    amount: number;

    @Prop({
        required : true,
        type: mongoose.Types.Map
    })
    paymentInfo: Object;
}


export type IPaymentDocument = PaymentSchemaCreator & Document;
export const PaymentSchema = SchemaFactory.createForClass(
    PaymentSchemaCreator
).plugin(uniqueValidators)
