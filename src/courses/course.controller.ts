import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guards";
import { CreateCourseDto } from "./course.dto";
import { CourseService } from "./course.service";



@Controller('course')
@ApiTags('Course')
export class CourseController {
    constructor(
        private courseService: CourseService
    ) { }
    @Post('')
    async createCourse(@Res() response, @Body() coursePayload: CreateCourseDto) {
        try {
            const course = await this.courseService.createCourse(coursePayload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Course Created sucessfully',
                course
            });
        } catch (error) {
            console.log(error);

            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Course not created!',
                error: 'Bad Request',
            });
        }
    }

    @Put('/:id')
    async updateCourse(
        @Res() response,
        @Param('id') courseId: string,
        @Body() coursePayload: CreateCourseDto
    ) {
        try {
            const course = await this.courseService.updateCourse(coursePayload, courseId);
            return response.status(HttpStatus.OK).json({
                message: 'Course has been successfully updated',
                course,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    @ApiQuery({
		name: "searchTerm",
		required: false,
		type: String
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
    async getAllCourses(@Res() response, @Query() query) {
        try {
            const courseData = await this.courseService.getAllCourses(query);
            return response.status(HttpStatus.OK).json({
                message: 'All Courses data found successfully',
                data: courseData,
            });
        } catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
            });
        }
    }
    
    @Delete('/:id')
    async deleteCourse(@Res() response, @Param('id') courseId: string) {
      try {
        const course = await this.courseService.deleteCourse(courseId);
        return response.status(HttpStatus.OK).json({
          message: 'Course deleted successfully',
          course,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
}