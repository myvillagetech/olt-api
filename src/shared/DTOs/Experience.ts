import { ApiProperty } from "@nestjs/swagger"

export class Experience {
    @ApiProperty({
        type: Number
    })
    years: number;

    @ApiProperty({
        type: Number
    })
    month: number
}