import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { User } from "src/users/schema/user.schema";
import { Status } from "../schedule.status";

export class ScheduleDto {

    @IsDefined()
    @ApiProperty({
        type: String
    })
    student: string;

    @IsDefined()
    @ApiProperty({
        type: String
    })
    tutor: string;

    @ApiProperty({
        type: Array<String>
    })
    subjects: string[]

    @ApiProperty({
        type: Array<String>,
        enum: Status
    })
    @IsDefined()
    status: Status
    @ApiProperty({
        type: Date
    })
    @IsDefined()
    date: Date;

    @ApiProperty({
        type: Number
    })
    @IsDefined()
    from: Number;

    @ApiProperty({
        type: Number
    })
    @IsDefined()
    to: Number;
}

