import { IsDefined, IsEmail } from "class-validator";
import { IAvilableSlots, ICancellationPolicy, ISubjects } from "./tutorProfile.schema";


export class TutorProfileDto {

    userId : string;
    firstName: string;
    lastName: string;
    @IsEmail()
    email : string;
    title: string;  
    discription: string;   
    subject: ISubjects[];
    slots : IAvilableSlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy

}