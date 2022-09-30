import { IsDefined } from "class-validator";
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";
import { Status } from "../schedule.status";

export class ScheduleDto {

    @IsDefined()
    studentId: string;

    @IsDefined()
    tutorId: string;

    @IsDefined()
    subjects: ISubjects[]

    @IsDefined()
    status: Status

    @IsDefined()
    date: string;

    @IsDefined()
    startTime: string;

    @IsDefined()
    endTime: string;
}

