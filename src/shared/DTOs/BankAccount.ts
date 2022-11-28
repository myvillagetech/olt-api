import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger"

export class BankAccount {
    @ApiProperty({
        type: String
    })
    accountNumber: string;

    @ApiProperty({
        type: String,
    })
    @Optional()
    _id: string;

    @ApiProperty({
        type: String
    })
    bankerName: string;

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: Boolean
    })
    isDefault: boolean;
}