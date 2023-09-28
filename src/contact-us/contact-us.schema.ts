import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { Document } from "mongoose";

@Schema({
    timestamps : true
})

export class ContactUsSchemaCreator {
    @Prop({
        required :true,
    })
    name : string;

    @Prop({
        required:true
    })
    email : string;

    @Prop({
        required : true
    })
    mobileNumber : string;

    @Prop({
        required : true
    })
    message : string;

    @Prop({
        default: true
    })
    isActive: Boolean
}

export type IContactUsDocument  = ContactUsSchemaCreator & Document;
export const ContactUsSchema = SchemaFactory.createForClass(
    ContactUsSchemaCreator
).plugin(uniqueValidators)