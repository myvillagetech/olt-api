import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserSchema } from './users/schema/user.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://villagetech:L3r30nnGJqrmFcHQ@cluster0.7mzkrzz.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, UsersController],
  providers: [UsersService],
})
export class AppModule {}
