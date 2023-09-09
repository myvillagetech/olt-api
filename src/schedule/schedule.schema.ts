import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { User } from "src/users/schema/user.schema";
import { Status } from "./schedule.status";

@Schema()
export class SlotSchemaCreator {
    @Prop({
        required : true
    })
    date : Date;
    @Prop({
        required : true
    })
    from : number;
    @Prop({
        required : true
    })
    to : number;
}

export type ISlotDocument = SlotSchemaCreator & Document;
export const SlotSchema = SchemaFactory.createForClass(
    SlotSchemaCreator
).plugin(uniqueValidators)


@Schema({
    timestamps : true
})
export class ScheduleSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    })
    student : User;
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    })
    tutor: User;
    @Prop({
        required : true
    })
    subjects : Array<string>

    @Prop({
        _id: false,
        type: [SlotSchema]
    })
    slots: SlotSchemaCreator[];
    @Prop({
        required : false,
        default : 'SCHEDULED'
    })
    status : Status;
    @Prop({
        required : false,
    })
    rejectedNote : string;
    @Prop({
        required : false,
    })
    cancelNote : string;

    @Prop()
    meetingLink: string;

    @Prop()
    recordingLink: string;

    @Prop({type: Object })
    paymentInformation: any;

    @Prop({type: Object })
    tutorPayoutInformation: any;

    @Prop({type: Boolean })
    isFreeDemo: boolean;

    @Prop({type: Number })
    amount: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    })
    paymentId;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payout',
    })
    payoutId;
}

export type IScheduleDocument = ScheduleSchemaCreator & Document;
export const ScheduleSchema = SchemaFactory.createForClass(
    ScheduleSchemaCreator
).plugin(uniqueValidators)