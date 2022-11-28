import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { BankAccount as BankAccountDTO } from "src/shared/DTOs/BankAccount";
import { EducationQualification as EducationQualificationDTO} from "src/shared/DTOs/EducationQualification";
import { Experience } from "src/shared/DTOs/Experience";

export interface ISlots {
    from: number | null,
    to: number | null
}
export interface IAvilableSlots {
    day: number,
    slots: ISlots[]
}

export interface ISubjects {
    courseName: string,
    _id: string
}

export class ICancellationPolicy {
    unit: string;
    quantity: string;
    charge: string;
}


@Schema({})
export class BankAccount {
    @Prop({
        required: true,
    })
    accountNumber: string;
    @Prop({
        required: true,
    })
    bankerName: string;
    @Prop({
        required: true,
    })
    name: string;
    @Prop({
        required: true,
    })
    isDefault: boolean;
}

export const BankAccountSchema = SchemaFactory.createForClass(
    BankAccount
).plugin(uniqueValidators)

@Schema({})
export class EducationQualification {
    @Prop({
        required : true,
    })
    course : string;

    @Prop({
        required : true,
    })
    endYear : string;

    @Prop({
        required : true,
    })
    grade : string;

    @Prop({
        required : true,
    })
    specialization : string;

    @Prop({
        required : true,
    })
    startYear : string;

    @Prop({
        required : true,
    })
    university : string;
}

export const EducationQualificationSchema = SchemaFactory.createForClass(
    EducationQualification
).plugin(uniqueValidators)

@Schema({
    timestamps: true
})

export class TutorProfileSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        // unique : true
    })
    userId: string;
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
    phone: string;

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
        required: true,
        unique: true
    })
    email: string;

    @Prop({
        required: true
    })
    title: string;

    @Prop({
        required: false
    })
    description: string;

    @Prop({
        required: false
    })
    subject: ISubjects[];

    @Prop({
        required: false
    })
    slots: IAvilableSlots[];

    @Prop({
        required: false
    })
    hourlyRate: number;

    @Prop({
        required: false
    })
    cancellationPolicy: ICancellationPolicy

    @Prop({
        required: false,
        type: mongoose.Types.Map
    })
    experience: Experience;

    @Prop({
    })
    timeZone: string;

    @Prop({
        type: [BankAccountSchema]
    })
    bankAccountDetails: BankAccountDTO[];

    @Prop({
        type:[EducationQualificationSchema]
    })
    educationQualification : EducationQualificationDTO[];
}

export type ITutorProfileDocument = TutorProfileSchemaCreator & Document;
export const TutorProfileSchema = SchemaFactory.createForClass(
    TutorProfileSchemaCreator
).plugin(uniqueValidators)