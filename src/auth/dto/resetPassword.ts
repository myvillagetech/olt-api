import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class ResetPasswordDto {
    @ApiProperty({
        type: String
    })
    @IsEmail()
    email: string;

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
