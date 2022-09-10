import { IsDefined, IsEmail } from "class-validator";
import { ICancellationPolicy, ISlots } from "./tutorProfile.schema";


export class TutorProfileDto {
   
    firstName: string;
    lastName: string;
    @IsEmail()
    email : string;
    title: string;  
    discription: string;   
    subject: string;
    slots : ISlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy

}