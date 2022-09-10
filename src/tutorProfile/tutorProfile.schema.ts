import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'



export interface ISlots {  
    day: string;
    fromTime: string;
    toTime: string;
}

export class ICancellationPolicy {
  
    unit: string;
    quantity: string;
    charge: string;
}

@Schema({
    timestamps: true
})

export class TutorProfileSchemaCreator {
    @Prop({
        required: true,
    })
    firstName: string;

    @Prop({
        required: true
    })
    lastName: string;

    @Prop({
        required : true,
        unique : true
    })
    email : string;

    @Prop({
        required: true
    })
    title: string;

    @Prop({
        required: false
    })
    discription: string;

    @Prop({
        required : false
    })
    subject: string;

    @Prop({
        required : false
    })
    slots : ISlots[];
   
    @Prop({
        required : false
    })
    hourlyRate : number;

    @Prop({
        required : false
    })
    cancellationPolicy : ICancellationPolicy

}

export type ITutorProfileDocument = TutorProfileSchemaCreator & Document;
export const TutorProfileSchema = SchemaFactory.createForClass(
    TutorProfileSchemaCreator
).plugin(uniqueValidators)