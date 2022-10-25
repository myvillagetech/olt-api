import { ApiProperty } from "@nestjs/swagger"

export class BankAccount {
    @ApiProperty({
        type: String
    })
    accountNumber: string;

    @ApiProperty({
        type: String
    })
    bankerName: string;

    @ApiProperty({
        type: String
    })
    name: string;
}