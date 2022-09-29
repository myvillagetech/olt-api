import { IsDefined, IsEmail } from "class-validator";
import { IAvilableSlots, ICancellationPolicy, ISubjects } from "./tutorProfile.schema";


export class TutorProfileDto {

    userId : string;
    firstName: string;
    lastName: string;
    state: string;
    city: string;
    address: string;
    @IsEmail()
    email : string;
    title: string;  
    description: string;   
    subject: ISubjects[];
    slots : IAvilableSlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy
}