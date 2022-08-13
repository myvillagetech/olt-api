import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class User {

    @Prop()
    id: string

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    contact: string

    @Prop()
    password: string

    @Prop()
    DoB: string

    @Prop()
    active: string

    @Prop()
    roles: Array<string>

    @Prop()
    address: string
}
export const UserSchema = SchemaFactory.createForClass(User);
