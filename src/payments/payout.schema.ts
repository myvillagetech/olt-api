import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ScheduleSchemaCreator } from "src/schedule/schedule.schema";

@Schema({
    timestamps : true
})

export class PayoutSchemaCreator {
    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'schedule',
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


export type IPayoutDocument = PayoutSchemaCreator & Document;
export const PayoutSchema = SchemaFactory.createForClass(
    PayoutSchemaCreator
).plugin(uniqueValidators)
