import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { CreateCategoryeDto } from './category.dto';
import { ICategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(MODEL_ENUMS.CATEGORIES) private categoryModel: Model<ICategoryDocument>,) {
    }

    async createCategory(payload: CreateCategoryeDto): Promise<CreateCategoryeDto | UnprocessableEntityException> {
        try {
            const category = new this.categoryModel(payload);
            return category.save();
        }
        catch (error) {
            throw new HttpException(`Something went wrong ... Please try again`, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    async getAllCategoires(query: any): Promise<CreateCategoryeDto[]> {
        var sort = {};
        sort[query.sortBy] = 1;
        
        const findOption = query.query ?
            this.categoryModel.find({
                $or: [
                    { 'categoryName': { '$regex': query.searchTerm, '$options': 'i' } },
                    { 'categoryDiscription': { '$regex': query.searchTerm, '$options': 'i' } }
                ]
            })
            : this.categoryModel.find();
        const details = await findOption.sort(sort);

        if (!details || details.length == 0) {
            throw new NotFoundException('categories data not found!');
        }
        return details;
    }

    async deleteCategory(categoryId: string): Promise<ICategoryDocument | NotFoundException | UnprocessableEntityException> {
        const course = await this.categoryModel.findByIdAndDelete(categoryId).exec();
        if (!course) {
            throw new NotFoundException(`Category #${categoryId} not found`)
        }
        return course;
    }

    async updateCategory(coursePayload: CreateCategoryeDto, courseId: string): Promise<CreateCategoryeDto | UnprocessableEntityException> {
        const course = await this.categoryModel.findByIdAndUpdate(courseId, coursePayload).exec()
        if (!course) {
            throw new HttpException(`Category #${courseId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return course;
    }

}
