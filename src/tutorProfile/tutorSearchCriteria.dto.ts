import { ApiProperty } from "@nestjs/swagger";
import { CriteriaWithPagination } from "src/shared/DTOs/CriteriaWithPagination";

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
export class TutorSearchCriteria extends CriteriaWithPagination{
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

}