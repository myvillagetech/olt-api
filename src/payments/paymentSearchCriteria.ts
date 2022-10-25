import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { CriteriaWithPaginationAndSorting } from "src/shared/DTOs/criteriaWithPaginationAndSorting";

export class PaymentSearchCriteria extends CriteriaWithPaginationAndSorting {

    @ApiProperty({
        type: String
    })
    studentId: string;

    @ApiProperty({
        type: String
    })
    tutorId: string;

    @ApiProperty({
        type: String
    })
    paymentId: string;
}