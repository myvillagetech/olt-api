import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { User } from "src/users/schema/user.schema";

@Schema({
    timestamps : true
})

export class MessageSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    })
    from : User;
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    })
    to: User;
    @Prop({
        required : true
    })
    message : string;
}

export type IMessageDocument = MessageSchemaCreator & Document;
export const MessageSchema = SchemaFactory.createForClass(
    MessageSchemaCreator
).plugin(uniqueValidators)