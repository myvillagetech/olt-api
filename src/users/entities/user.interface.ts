import { Document } from 'mongoose'; 

export interface IUser extends Document {

    readonly userId: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly password: string;
    readonly dob: Date;
    readonly active: string;
    readonly roles: Array<string>;
    readonly address: string;
}
