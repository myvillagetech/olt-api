import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as uniqueValidators from 'mongoose-unique-validator'
import { FAQCategory } from "src/shared/enums/faqCategory.enums";

@Schema({
    timestamps : true
})

export class FaqSchemaCreator {

    @Prop({
        required : true,
        type: String
    })
    question: string;

    @Prop({
        required : true,
        type: String
    })
    answer: string;

    @Prop({
        required : true,
        type: String,
        enum: FAQCategory
    })
    category: string;

}


export type FaqDocument = FaqSchemaCreator & Document;
export const FaqSchema = SchemaFactory.createForClass(
    FaqSchemaCreator
).plugin(uniqueValidators)
