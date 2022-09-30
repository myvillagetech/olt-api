import { HttpException, HttpStatus, Inject, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { CreateCourseDto } from "./course.dto";
import { ICourseDocument } from "./course.schema";

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(MODEL_ENUMS.COURSES) private  courseModel : Model<ICourseDocument>,
    ) {}

    async createCourse(coursePayload : CreateCourseDto) : Promise<CreateCourseDto | UnprocessableEntityException>{
        try{
            const course = new this.courseModel(coursePayload);
            return course.save();
        }
        catch (error) {
            throw new HttpException(`Something went wrong ... Please try again`, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    async getAllCourses(query): Promise<CreateCourseDto[]> {
        const search = {}
        if(query.searchTerm) {
            search['courseName'] =  { '$regex': query.searchTerm, '$options': 'i' };
        }

        const findOption =this.courseModel.find(search);
        if(query.pageSize && query.pageNumber) {
            findOption.limit(query.pageSize).skip(+query.pageNumber * +query.pageSize)
        }
        const courseDetails = await this.courseModel.find(search);
        if (!courseDetails || courseDetails.length == 0) {
            throw new NotFoundException('courses data not found!');
        }
        return courseDetails;
    }

    async deleteCourse(courseId : string) : Promise < ICourseDocument | NotFoundException | UnprocessableEntityException > {
        const course = await this.courseModel.findByIdAndDelete(courseId).exec();
        if(!course){
            throw new NotFoundException(`Course #${courseId} not found`)
        }
        return course;
    }

    async updateCourse(coursePayload : CreateCourseDto, courseId : string) : Promise<CreateCourseDto | UnprocessableEntityException>{
        const course = await this.courseModel.findByIdAndUpdate(courseId,coursePayload).exec()
        if (!course) {
            throw new HttpException(`Course #${courseId} not found`, HttpStatus.NOT_MODIFIED);
        }
        return course;
    }


}