import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { CategorySchema } from './category.schema';
import { CategoryService } from './category.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: MODEL_ENUMS.CATEGORIES, schema: CategorySchema }])],
    providers: [CategoryService],
    exports: [CategoryService]
})
export class CategoryModule { }
