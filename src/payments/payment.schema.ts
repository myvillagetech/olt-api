import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { RatingSchemaCreator } from "src/ratings/rating.schema";
import * as uniqueValidators from 'mongoose-unique-validator'

export class PaymentSchemaCreator {
    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
        required : true
    })
    scheduleIds: Array<string>;

    @Prop({
        required : true
    })
    paymentId: string;

    @Prop({
        required : true
    })
    status: string;

    @Prop({
        required : true,
        type: Object
    })
    paymentInfo;
}


export type IPaymentDocument = PaymentSchemaCreator & Document;
export const PaymentSchema = SchemaFactory.createForClass(
    RatingSchemaCreator
).plugin(uniqueValidators)