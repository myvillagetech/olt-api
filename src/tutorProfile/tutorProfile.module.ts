import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { TutorProfileController } from "./tutorProfile.controller";
import { TutorProfileSchema } from "./tutorProfile.schema";
import { TutorProfileService } from "./tutorProfile.service";
import { CourseModule } from "src/courses/course.module";



@Module({
    imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.PROFILE, schema: TutorProfileSchema}]),CourseModule],
    providers : [
        TutorProfileService,
    ],
    controllers : [TutorProfileController],
    exports : [TutorProfileService]
   
})

export class TutorProfileModule {}