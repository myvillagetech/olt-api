import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { User } from "src/users/schema/user.schema";

@Schema({
    timestamps : true
})

export class AlertSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    })
    user : User;
    @Prop({
        required : true,
        type: String
    })
    message : string;
    @Prop({
        required : true,
        type: Boolean,
        default: false
    })
    isRead: boolean;
    @Prop({
        required: true,
        type:String,
        enum:['Schedule']
    })
    type: string;
    @Prop({
        required: false,
        type: Object
    })
    data: Object
}

export type IAlertDocument = AlertSchemaCreator & Document;
export const AlertSchema = SchemaFactory.createForClass(
    AlertSchemaCreator
).plugin(uniqueValidators)
