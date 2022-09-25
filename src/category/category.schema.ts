import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'

@Schema({
    timestamps : true
})
export class CategorySchemaCreator {
    @Prop({
        required :true,
        unique : true,
    })
    categoryName : string;

    @Prop({
        required:true
    })
    categoryDiscription : string;

}

export type ICategoryDocument = CategorySchemaCreator & Document;
export const CategorySchema = SchemaFactory.createForClass(
    CategorySchemaCreator
).plugin(uniqueValidators)