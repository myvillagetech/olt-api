import { Document } from 'mongoose'; 

export interface IUser extends Document {

    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly contact: string;
    readonly password: string;
    readonly DoB: string;
    readonly active: string;
    readonly roles: Array<string>;
    readonly address: string;
}
