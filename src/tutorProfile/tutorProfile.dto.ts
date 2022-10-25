import { ApiBody } from "@nestjs/swagger";
import { IsDefined, IsEmail } from "class-validator";
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
    @IsEmail()
    email : string;
    title: string;  
    description: string;   
    subject: ISubjects[];
    slots : IAvilableSlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy;
    experience: Experience;
}