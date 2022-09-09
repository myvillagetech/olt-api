import { IsDefined } from "class-validator";

export class CreateCourseDto {
    _id?: string;

    courseName?:string;

    @IsDefined()
    courseDiscription?:string;

    category?:string
}