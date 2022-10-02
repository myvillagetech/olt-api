import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { User } from "src/users/schema/user.schema";
import { Status } from "./schedule.status";


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
    @Prop({
        required : false,
        default : 'SCHEDULED'
    })
    status : Status

}

export type IScheduleDocument = ScheduleSchemaCreator & Document;
export const ScheduleSchema = SchemaFactory.createForClass(
    ScheduleSchemaCreator
).plugin(uniqueValidators)