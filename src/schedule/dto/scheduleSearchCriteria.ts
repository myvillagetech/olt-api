import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { CriteriaWithPagination } from "src/shared/DTOs/CriteriaWithPagination";
import { DateRange } from "src/shared/DTOs/dateRange";
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { Status } from "../schedule.status";

export class ScheduleSearchCriteria extends CriteriaWithPagination{

    @IsDefined()
    @ApiProperty({
        type: Array<String>
    })
    studentIds: Array<string>;

    @IsDefined()
    @ApiProperty({
        type: Array<String>
    })
    tutorIds: Array<string>;

    @ApiProperty({
        type: Array<String>
    })
    subjects: string[]

    @ApiProperty({
        type: Array<String>,
        enum: Status
    })
    @IsDefined()
    status: Status[]

    @ApiProperty({
        type: Date
    })
    @IsDefined()
    dateRange: DateRange;
}

