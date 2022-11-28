import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, isNumber, IsString, MaxLength } from "class-validator";
import { type } from "os";

export class SignUpDTO {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly firstName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly lastName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly email: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly phone: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly password: string;

    readonly dob: Date

    @ApiProperty({
        type : Array<String>
    })
    readonly roles: Array<string>;

    address: object;
}
