import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, Max, MaxLength, Min, ValidateIf } from "class-validator";

export class FromAndTo {
    @IsDefined()
    @ApiProperty({
        type: String
    })
    from: string;
    @IsDefined()
    @ApiProperty({
        type: String
    })
    to: string;
}

export class MessageDto extends FromAndTo {
    @MaxLength(150)
    @ApiProperty({
        type: String
    })
    message?: string;
}

