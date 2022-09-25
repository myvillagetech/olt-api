
import { IsDefined } from "class-validator";

export class CreateCategoryeDto {

    categoryName?:string;

    @IsDefined()
    categoryDiscription?:string;
}