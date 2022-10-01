import { ApiProperty } from "@nestjs/swagger"

export class DateRange {
    @ApiProperty({
        type: Date
    })
    from: Date;

    @ApiProperty({
        type: Date
    })
    to: Date
}