import { ApiProperty } from "@nestjs/swagger";

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

export class TutorSearchCriteria {
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