import { ApiProperty } from "@nestjs/swagger";

export class Review {
    @ApiProperty({
        type: String
    })
    title: string;
    @ApiProperty({
        type: String
    })
    description: string
}