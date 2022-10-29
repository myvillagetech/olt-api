import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class Payout {
    @IsDefined()
    @ApiProperty({
        type: [String]
    })
    scheduleIds: [string];

    @IsDefined()
    @ApiProperty({
        type: String
    })
    paymentId: string;

    @IsDefined()
    @ApiProperty({
        type: String
    })
    status: string;

    @IsDefined()
    @ApiProperty({
        type: Number
    })
    amount: number;

    @IsDefined()
    @ApiProperty({
        type: Object
    })
    paymentInfo: Object;
}
