import { ApiBody } from "@nestjs/swagger";
import { IsDefined, IsEmail } from "class-validator";
import { BankAccount } from "src/shared/DTOs/BankAccount";
import { Experience } from "src/shared/DTOs/Experience";
import { IAvilableSlots, ICancellationPolicy, ISubjects } from "./tutorProfile.schema";
export class TutorProfileDto {
    userId : string;
    firstName: string;
    lastName: string;
    phone: string;
    state: string;
    city: string;
    address: string;
    addressLine2?: string;
    zip: string;
    country: string;
    @IsEmail()
    email : string;
    title: string;  
    description: string;   
    newSubjects?:any[];
    subject: ISubjects[];
    slots : IAvilableSlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy;
    experience: Experience;
    bankAccountDetails: BankAccount[];
    timeZone: string;
}