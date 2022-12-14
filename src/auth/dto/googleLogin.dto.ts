import { IsEmail, IsNotEmpty } from "class-validator";

export class GoogleLoginDto {
    @IsEmail()
    email:string;

    @IsNotEmpty()
    firstName:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    lastName:string;

    @IsNotEmpty()
    idToken:string;

    @IsNotEmpty()
    provider:string;

    @IsNotEmpty()
    photoUrl:string;
}
