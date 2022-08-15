import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

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
}
export const UserSchema = SchemaFactory.createForClass(User);
