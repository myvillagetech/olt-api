import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { CreateCategoryeDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@ApiTags('Category')
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
    @ApiQuery({
		name: "pageSize",
		required: false,
		type: Number
	})
    @ApiQuery({
		name: "pageNumber",
		required: false,
		type: Number
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
