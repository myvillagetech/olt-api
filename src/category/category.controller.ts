import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateCategoryeDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {
    }

    @Post('')
    async createCategory(@Res() response, @Body() categoryPayload: CreateCategoryeDto) {
        try {
            const category = await this.categoryService.createCategory(categoryPayload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Category Created sucessfully',
                category
            });
        } catch (error) {
            console.log(error);

            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Category not created!',
                error: 'Bad Request',
            });
        }
    }

    @Get()
    async getAllCategoires(@Res() response) {
        try {
            const courseData = await this.categoryService.getAllCategoires();
            return response.status(HttpStatus.OK).json({
                message: 'All Category data found successfully',
                data: courseData,
            });
        } catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
            });
        }
    }
}
