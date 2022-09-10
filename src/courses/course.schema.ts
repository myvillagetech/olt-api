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
        required:true
    })
    courseDiscription : string;

    @Prop({
        required : true
    })
    category : string;
}

export type ICourseDocument = CourseSchemaCreator & Document;
export const CourseSchema = SchemaFactory.createForClass(
    CourseSchemaCreator
).plugin(uniqueValidators)