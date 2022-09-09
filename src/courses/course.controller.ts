import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guards";
import { CreateCourseDto } from "./course.dto";
import { CourseService } from "./course.service";



@Controller('course')
export class CourseController {
    constructor(
        private courseService: CourseService
    ) { }
    // @UseGuards(JwtAuthGuard)
    @Post('')
    async createCourse(@Body() coursePayload: CreateCourseDto) {
        try {
            const course = await this.courseService.createCourse(coursePayload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Course Created sucessfully',
                course
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Course not created!',
                error: 'Bad Request',
            });
        }
    }

    @Put('/:id')
    async updateCourse(
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
    async getAllCourses() {
        try {
            const courseData = await this.courseService.getAllCourses();
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
    async deleteCourse( @Param('id') courseId: string) {
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