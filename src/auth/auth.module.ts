import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategies';
import { MongooseModule } from '@nestjs/mongoose';
// import { ScheduleSchema } from './schedule.schema';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { UsersModule } from 'src/users/users.module';
import { OtpSchema } from './otp.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MODEL_ENUMS.OTP, schema: OtpSchema}]),UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }


// imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.SCHEDULE, schema: ScheduleSchema}]),UsersModule,],
// controllers: [ScheduleController],
// providers: [ScheduleService],
// exports : [ScheduleService]