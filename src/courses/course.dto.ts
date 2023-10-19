import { IsDefined } from "class-validator";
import { CriteriaWithPaginationAndSorting } from "src/shared/DTOs/criteriaWithPaginationAndSorting";

export class CreateCourseDto {

    courseName?:string;

    @IsDefined()
    courseDiscription?:string;

    category?:string;

    courseImageUrl? : string;
 

    isActive?: Boolean;
}

export class GetCourseDto {
    searchTerm?: string;
    category?:string;
    pageSize?: number;
    pageNumber?: number;
}