import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { Type } from "class-transformer";
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { User } from "src/users/schema/user.schema";
import { Status } from "../schedule.status";

export class Slot {
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
        type: String,
        enum: Status
    })
    @IsDefined()
    status: Status
    @ApiProperty({
        type: [Slot],
    })
    @IsDefined()
    @Type(() => Slot)
    slots: Array<Slot>;



    @ApiProperty({
        type: String
    })
    meetingLink: string;
    @ApiProperty({
        type: String
    })
    recordingLink: string;

    @ApiProperty({
    })
    paymentInformation;
}

