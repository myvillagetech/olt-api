// import { Connection } from "mongoose";
// import { COLLECTION_NAMES, MODEL_ENUMS } from "src/shared/enums/models.enums";
// import { CourseSchema } from "./course.schema";


// export const CourseProvider = [
//     {
//         provide : MODEL_ENUMS.COURSES,
//         useFactory : (connection: Connection) => connection.model(COLLECTION_NAMES.COURSES, CourseSchema),
//         inject : [MODEL_ENUMS.DATABASE_CONNECTION]
//     }
// ]