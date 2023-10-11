import { ApiProperty } from "@nestjs/swagger";
import { CriteriaWithPaginationAndSorting } from "src/shared/DTOs/criteriaWithPaginationAndSorting";

export class RateRange { 
    @ApiProperty({
        type: Number
    })
    from : number; 
    @ApiProperty({
        type: Number
    })
    to:  number
};
export class TutorSearchCriteria extends CriteriaWithPaginationAndSorting{
    @ApiProperty({
        type: Array<string>
    })
    states: string[];
    @ApiProperty({
        type: RateRange
    })
    rateRange: RateRange;
    @ApiProperty({
        type: String
    })
    cource: string;
    @ApiProperty({
        type: Array<number>
    })
    days: number[];
    @ApiProperty({
        type: Number,
        maximum: 5,
        minimum: 1
    })
    rating: number;

}