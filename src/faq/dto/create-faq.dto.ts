import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { CriteriaWithPaginationAndSorting } from "src/shared/DTOs/criteriaWithPaginationAndSorting";
import { FAQCategory } from "src/shared/enums/faqCategory.enums";

export class CreateFaqDto {
    @ApiProperty({ description: "The question" })
    @IsString()
    question: string;

    @ApiProperty({ description: "The answer" })
    @IsString()
    answer: string;

    @ApiProperty({
        description: "The category (student, tutor, common)",
        enum: FAQCategory,
    })
    @IsEnum(FAQCategory)
    category: FAQCategory;
}

export class faqSearchByCrieriaDto extends CriteriaWithPaginationAndSorting {
    @ApiProperty({
        type: Array<FAQCategory>
    })
    category: Array<FAQCategory>;

    @ApiProperty({
        type: String,
    })
    searchTerm: string
}
