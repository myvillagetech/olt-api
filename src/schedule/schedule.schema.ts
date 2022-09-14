import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";

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
    start : ISlots[];
    @Prop({
        required : true
    })
    end : ISlots[];
    @Prop({
        required : false,
        default : 'SCHEDULED'
    })
    status : string

}

export type IScheduleDocument = ScheduleSchemaCreator & Document;
export const ScheduleSchema = SchemaFactory.createForClass(
    ScheduleSchemaCreator
).plugin(uniqueValidators)