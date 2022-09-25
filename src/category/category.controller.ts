import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
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

    @ApiQuery({
		name: "searchTerm",
		required: false,
		type: String
	})
    @ApiQuery({
		name: "sortBy",
		required: true,
		type: String,
        enum: ["categoryName", "categoryDiscription"]
	})
    @Get()
    async getAllCategoires(@Res() response, @Query() query) {
        try {
            const courseData = await this.categoryService.getAllCategoires(query);
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

    @Put('/:id')
    async updateCategory(
        @Res() response,
        @Param('id') courseId: string,
        @Body() categoryPayload: CreateCategoryeDto
    ) {
        try {
            const course = await this.categoryService.updateCategory(categoryPayload, courseId);
            return response.status(HttpStatus.OK).json({
                message: 'Category has been successfully updated',
                course,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteCourse(@Res() response, @Param('id') courseId: string) {
        try {
            const course = await this.categoryService.deleteCategory(courseId);
            return response.status(HttpStatus.OK).json({
                message: 'Course deleted successfully',
                course,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
