import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './users/schema/user.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/oltDB'),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
    AuthModule,
  ConfigModule.forRoot()],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
