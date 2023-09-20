import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'

@Schema({
    timestamps : true
})
export class OtpSchemaCreator {
    @Prop({
        required :true,
    })
    otpCode : string;

    @Prop({
        default :'forgotPassword',
    })
    type : string;

    @Prop({
        required :true,
    })
    email : string;

    @Prop({
        required :true,
    })
    firstName: string;

    @Prop({
        required :true,
    })
    lastName: string;
}

export type OtpDocument = OtpSchemaCreator & Document;
export const OtpSchema = SchemaFactory.createForClass(
    OtpSchemaCreator
).plugin(uniqueValidators)