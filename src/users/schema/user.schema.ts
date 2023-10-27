import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'; ;

@Schema()
export class User {

    @Prop()
    userId: number

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    phone: string

    @Prop()
    password: string

    @Prop()
    dob: Date

    @Prop()
    active: string

    @Prop()
    roles: Array<string>

    @Prop()
    address: string

    @Prop()
    ssoProvider: string

    @Prop()
    photoUrl: string

    @Prop({
        default: true,
        required: true
    })
    isActive: boolean

    @Prop({
        type: String,
        required: false
    })
    timeZone:  String
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
