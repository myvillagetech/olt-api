import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { CreateCategoryeDto } from './category.dto';
import { ICategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(MODEL_ENUMS.CATEGORIES) private  categoryModel : Model<ICategoryDocument>,) {
    }

    async createCategory(payload: CreateCategoryeDto) : Promise<CreateCategoryeDto | UnprocessableEntityException> {
        try{
            const category = new this.categoryModel(payload);
            return category.save();
        }
        catch (error) {
            throw new HttpException(`Something went wrong ... Please try again`, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    async getAllCategoires(): Promise<CreateCategoryeDto[]> {
        const details = await this.categoryModel.find();
        if (!details || details.length == 0) {
            throw new NotFoundException('categories data not found!');
        }
        return details;
    }
}
