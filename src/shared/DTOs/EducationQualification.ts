import { ApiProperty } from "@nestjs/swagger";

export class EducationQualification {
    @ApiProperty({
        type : String
    })
    course : string;

    @ApiProperty({
        type : String
    })
    endYear : string;
    
    @ApiProperty({
        type : String
    })
    grade : string;

    @ApiProperty({
        type : String
    })
    specialization : string;

    @ApiProperty({
        type : String
    })
    startYear : string;

    @ApiProperty({
        type : String
    })
    university : string;

    @ApiProperty({
        type: String
    })
    _id: string;

}