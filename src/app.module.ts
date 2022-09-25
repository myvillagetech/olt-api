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

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://villagetech:L3r30nnGJqrmFcHQ@cluster0.7mzkrzz.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UsersModule,
    AuthModule,
    CourseModule,
    ConfigModule.forRoot(),
    CategoryModule,
  ],
  controllers: [AppController, CategoryController],
})
export class AppModule {}
