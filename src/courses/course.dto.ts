import { IsDefined } from "class-validator";

export class CreateCourseDto {

    courseName?:string;

    @IsDefined()
    courseDiscription?:string;

    category?:string;

    courseImageUrl? : string;
 

    isActive?: Boolean;
}