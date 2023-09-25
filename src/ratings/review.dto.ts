import { ApiProperty } from "@nestjs/swagger";

export class Review {
    @ApiProperty({
        type: String,
        required: false
    })
    title: string;
    @ApiProperty({
        type: String
    })
    description: string
}