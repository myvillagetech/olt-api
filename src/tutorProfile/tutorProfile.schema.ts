import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { BankAccount as BankAccountDTO } from "src/shared/DTOs/BankAccount";
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
}

export const BankAccountSchema = SchemaFactory.createForClass(
    BankAccount
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
}

export type ITutorProfileDocument = TutorProfileSchemaCreator & Document;
export const TutorProfileSchema = SchemaFactory.createForClass(
    TutorProfileSchemaCreator
).plugin(uniqueValidators)