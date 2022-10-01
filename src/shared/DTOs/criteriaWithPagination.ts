
import { ApiProperty } from "@nestjs/swagger"

export class CriteriaWithPagination {
    @ApiProperty({
        type: Number
    })
    pageNumber: number;

    @ApiProperty({
        type: Number
    })
    pageSize: number;
}