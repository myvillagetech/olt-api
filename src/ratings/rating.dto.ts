import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, Max, Min, ValidateIf } from "class-validator";
import { Review } from "./review.dto";

export class RatingDto {
    @IsDefined()
    @ApiProperty({
        type: String
    })
    student : string;
    @IsDefined()
    @ApiProperty({
        type: String
    })
    tutor: string;
    
    @ValidateIf(r => r.rating !== null || r.rating !== undefined)
    @Min(1)
    @Max(5)
    @ApiProperty({
        type: Number
    })
    rating?: number;

    review?: Review;
}