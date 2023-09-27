import { ApiProperty } from "@nestjs/swagger";

export class CreateContactUsDto {
    @ApiProperty({
        type: String
    })
    name:string;

    @ApiProperty({
        type: String
    })
    email:string;

    @ApiProperty({
        type: String
    })
    mobileNumber:string

    @ApiProperty({
        type: String
    })
    message:string

    @ApiProperty({
        type: Boolean
    })
    isActive: Boolean
}

