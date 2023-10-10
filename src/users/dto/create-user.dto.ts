import { PartialType } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    isNumber,
    IsString,
    MaxLength,
    ValidateIf,
} from 'class-validator';

export class CreateUserDto {
    // @IsNumber()
    // @IsNotEmpty()
    readonly userId: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly phone: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;

    // @IsNotEmpty()
    readonly dob: Date;

    @IsString()
    // @MaxLength(1)
    readonly active: string;

    readonly roles: Array<string>;

    address: string;

    @ValidateIf(r => r.ssoProvider && r.ssoProvider !== '')
    @IsString()
    ssoProvider?: string

    @ValidateIf(r => r.photoUrl && r.photoUrl !== '')
    @IsString()
    photoUrl?: string
}
export class updateUser extends PartialType(CreateUserDto) {}
