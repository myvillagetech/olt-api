import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
    @ApiProperty({
        type: String
    })
    email?: string;

    @ApiProperty({
        type: String
    })
    userId?: string;

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    oldPassword: string;

    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    newPassword: string;
}
