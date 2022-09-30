import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Date, Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { Status } from "./schedule.status";


@Schema({
    timestamps : true
})

export class ScheduleSchemaCreator {
    @Prop({
        required : true
    })
    studentId : string;
    @Prop({
        required : true
    })
    tutorId: string;
    @Prop({
        required : true
    })
    subjects : ISubjects[]
    @Prop({
        required : true
    })
    date : string;
    @Prop({
        required : true
    })
    startTime : string;
    @Prop({
        required : true
    })
    endTime : string;
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