import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, Max, Min } from "class-validator";

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
    @IsDefined()
    @Min(1)
    @Max(5)
    @ApiProperty({
        type: Number
    })
    rating : number;
}