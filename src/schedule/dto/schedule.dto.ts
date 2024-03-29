import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { Type } from "class-transformer";
import { Status } from "../schedule.status";

export class PaymentInformation {
    @ApiProperty({
        type: String
    })
    trackingId: string;

    @ApiProperty({
        type: Object
    })
    payload: Object;
}
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

    @ApiProperty({
        type: String
    })
    @IsDefined()
    formatedFrom: String

    @ApiProperty({
        type: String
    })
    @IsDefined()
    formatedTo: String

    @ApiProperty({
        type: String
    })
    @IsDefined()
    utcFromtime: String

    @ApiProperty({
        type: String
    })
    @IsDefined()
    utcTotime: String
}
export class Attachments {
    @ApiProperty({
        type: String
    })
    @IsDefined()
    name: String;

    @ApiProperty({
        type: Number
    })
    @IsDefined()
    size: Number;

    @ApiProperty({
        type: String
    })
    @IsDefined()
    type: String;

    @ApiProperty({
        type: String
    })
    @IsDefined()
    url: String;
}

export class AcceptScheduleDto{
    @IsDefined()
    @ApiProperty({
        type: String
    })
    id: string; 

    @IsDefined()
    @ApiProperty({
        type: Number
    })
    amount: number;
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
    // @IsDefined()
    status: Status

    @ApiProperty({
        type: String,
    })
    rejectedNote: Status
    
    @ApiProperty({
        type: String,
    })
    cancelNote: Status

    @ApiProperty({
        type: [Slot],
    })
    // @IsDefined()
    @Type(() => Slot)
    slots: Array<Slot>;

    @ApiProperty({
        type: [Attachments],
    })
    // @IsDefined()
    @Type(() => Attachments)
    attachments: Array<Attachments>;

    @ApiProperty({
        type: String
    })
    notes: string;

    @ApiProperty({
        type: String
    })
    meetingLink: string;

    @ApiProperty({
        type: String
    })
    meetingStartUrl: string;

    @ApiProperty({
        type: String
    })
    recordingLink: string;

    @ApiProperty({
        type: PaymentInformation
    })
    paymentInformation;

    @ApiProperty({
        type: Boolean
    })
    isFreeDemo: boolean;
}

export class RejectScheduleDto{
    @ApiProperty({
        type: String
    })
    id: string;
    @ApiProperty({
        type: String
    })
    reason: string;
}

export class updateScheduleDto extends PartialType(ScheduleDto){

}

