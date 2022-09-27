import { IsDefined, IsEmail } from "class-validator";
import { ICancellationPolicy, ISlots,ISubjects } from "./tutorProfile.schema";


export class TutorProfileDto {

    userId : string;
    firstName: string;
    lastName: string;
    @IsEmail()
    email : string;
    title: string;  
    discription: string;   
    subject: ISubjects[];
    slots : ISlots[]
    hourlyRate : number;
    cancellationPolicy : ICancellationPolicy

}