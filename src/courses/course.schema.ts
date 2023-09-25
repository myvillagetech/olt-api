import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'

@Schema({
    timestamps : true
})
export class CourseSchemaCreator {
    @Prop({
        required :true,
        unique : true,
    })
    courseName : string;

    @Prop({
        required:false
    })
    courseDiscription : string;

    @Prop({
        required : false
    })
    category : string;

    @Prop({
        default: true
    })
    isActive: Boolean
}

export type ICourseDocument  = CourseSchemaCreator & Document;
export const CourseSchema = SchemaFactory.createForClass(
    CourseSchemaCreator
).plugin(uniqueValidators)