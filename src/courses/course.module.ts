import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { CourseController } from "./course.controller";
import { CourseSchema } from "./course.schema";
import { CourseService } from "./course.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.COURSES, schema: CourseSchema}])],
    providers : [
        CourseService,
    ],
    controllers : [CourseController],
    exports : [CourseService]
})

export class CourseModule {}