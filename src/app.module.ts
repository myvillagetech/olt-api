import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './users/schema/user.schema';
import { CourseModule } from './courses/course.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TutorProfileModule } from './tutorProfile/tutorProfile.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RatingsModule } from './ratings/ratings.module';
import { MesseagesModule } from './messeages/messages.module';
import { PaymentsModule } from './payments/payments.module';
import { FaqModule } from './faq/faq.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { AlertsModule } from './alerts/alerts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://OLTUser:rsg3Kr5FYeJLZtO4@ac-xhn4wa5-shard-00-00.ywaomqw.mongodb.net:27017,ac-xhn4wa5-shard-00-01.ywaomqw.mongodb.net:27017,ac-xhn4wa5-shard-00-02.ywaomqw.mongodb.net:27017/?ssl=true&replicaSet=atlas-pitzm7-shard-0&authSource=admin&retryWrites=true&w=majority',
      // 'mongodb+srv://OLTUser:rsg3Kr5FYeJLZtO4@olt.ywaomqw.mongodb.net/?retryWrites=true&w=majority',
      // 'mongodb://villagetech:SXvW1CFKqY2muXKE@ac-vegem53-shard-00-00.7mzkrzz.mongodb.net:27017,ac-vegem53-shard-00-01.7mzkrzz.mongodb.net:27017,ac-vegem53-shard-00-02.7mzkrzz.mongodb.net:27017/?ssl=true&replicaSet=atlas-r0113y-shard-0&authSource=admin&retryWrites=true&w=majority',
      // 'mongodb+srv://villagetech:SXvW1CFKqY2muXKE@cluster0.7mzkrzz.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UsersModule,
    AuthModule,
    CourseModule,
    TutorProfileModule,
    ConfigModule.forRoot(),
    CategoryModule,
    ScheduleModule,
    RatingsModule,
    MesseagesModule,
    PaymentsModule,
    FaqModule,
    ContactUsModule,
    AlertsModule,
  ],
  controllers: [AppController, CategoryController],
})
export class AppModule {}
