import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly id: string;

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
    @MaxLength(30)
    @IsNotEmpty()
    readonly contact: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly DoB: string

    @IsString()
    @MaxLength(1)
    @IsNotEmpty()
    readonly active: string;
    
    readonly roles: Array<string>;
    
    address: object;
}
