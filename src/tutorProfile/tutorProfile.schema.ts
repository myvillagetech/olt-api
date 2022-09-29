import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'

export interface ISlots {
    from : number | null,
    to : number | null
}
export interface IAvilableSlots {
    day : number,
    slots : ISlots[]
}

export interface ISubjects {
    courseName : string,
    _id : string
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
        required : true,
        unique : true
    })
    userId : string;
    @Prop({
        required: true,
    })
    firstName: string;

    @Prop({
        required: true
    })
    lastName: string;

    @Prop({
        required: true
    })
    state: string;

    @Prop({
        required: true
    })
    city: string;

    @Prop({
        required: true
    })
    address: string;

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
    description: string;

    @Prop({
        required : false
    })
    subject: ISubjects[];

    @Prop({
        required : false
    })
    slots : IAvilableSlots[];
   
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