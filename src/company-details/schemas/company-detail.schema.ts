import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'

@Schema({
    timestamps : true
})
export class CompanyDetailsSchemaCreator {
    @Prop({
        required :true,
        type: String,
        enum: ['PrivacyPolicy','TermsAndConditions']
    })
    name : string;

    @Prop({
        required:true,
        type: String
    })
    content : string;

}

export type ICompanyDetailsDocument = CompanyDetailsSchemaCreator & Document;
export const CompanyDetailsSchema = SchemaFactory.createForClass(
    CompanyDetailsSchemaCreator
).plugin(uniqueValidators)