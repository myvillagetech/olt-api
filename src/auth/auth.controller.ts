import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Ip,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GoogleLoginDto } from './dto/googleLogin.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ResetPasswordDto } from './dto/resetPassword';
import { SignUpDTO } from './dto/singup.dto';
import axios from 'axios';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    try {
      return await this.authService.login(body.email, body.password, {
        ipAddress: ip,
        userAgent: request.headers['user-agent'],
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('resetPassword')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    try {
      return await this.authService.resetPassword(resetPasswordDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('forgotPassword')
  async forgotPassword( @Res() response,@Body() emailId: any) {
    try {
      const user= await this.authService.forgotPassword(emailId.email);
      const userDetails =  user._doc
      const templatePayload = {
        templateName: "ForgotOtp",
        to:emailId.email,
        ...userDetails
        // to: "villagetechvenkat@gmail.com",
      };
      
      axios
        .post(
          "http://localhost:6004/notification/emailNotification",
          templatePayload
        )
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        return response.status(HttpStatus.OK).json({
          message: "Otp sent sucessfully",
        });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('verifyOtp')
  async verifyOtp( @Res() response,@Body() verifyOtpData: any) {
    try {
      const user= await this.authService.verifyOtp(verifyOtpData);
      return response.status(HttpStatus.OK).json({
        message: "Password Updated sucessfully",
      });
      
      
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }



  @Post('googleSignIn')
  async googleSignIn(@Req() request, @Ip() ip: string, @Body() body: GoogleLoginDto) {
    try {
      const result = await this.authService.googleSignIn(body, {
        ipAddress: ip,
        userAgent: request.headers['user-agent'],
      });

      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('googleSignUp')
  async googleSignUp(@Req() request, @Ip() ip: string, @Body() body: GoogleLoginDto) {
    try {
      const result = await this.authService.googleSignUp(body, {
        ipAddress: ip,
        userAgent: request.headers['user-agent'],
      });

      return result;
    } catch (error) {
      throw new HttpException('Token Validation failed', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('signup')
  async signup(@Res() response, @Req() request, @Ip() ip: string, @Body() body: SignUpDTO) {
    try {
      this.authService.signup(body);
      return response.status(HttpStatus.CREATED).json({
        message: 'User  signedup successfully',
      });
    }
    catch (e) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'something went worng',
      });
    }
  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
