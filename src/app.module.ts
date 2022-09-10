import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './users/schema/user.schema';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://villagetech:L3r30nnGJqrmFcHQ@cluster0.7mzkrzz.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    CourseModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
})
export class AppModule {}
