import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { User } from "src/users/schema/user.schema";

@Schema({
    timestamps : true
})

export class RatingSchemaCreator {
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
    rating : number;
}

export type IRatingDocument = RatingSchemaCreator & Document;
export const RatingSchema = SchemaFactory.createForClass(
    RatingSchemaCreator
).plugin(uniqueValidators)