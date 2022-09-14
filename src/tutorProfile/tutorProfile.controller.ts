import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guards";
import { TutorProfileDto } from "./tutorProfile.dto";
import { TutorProfileService } from "./tutorProfile.service";




@Controller('tutorProfile')
export class TutorProfileController{
    constructor(
        private tutorProfileService: TutorProfileService
    ) { }
    @UseGuards(JwtAuthGuard)
    @Post('')
    async createTutorProfile(@Res() response, @Body() tutorProfilePayload: TutorProfileDto ) {
        console.log(tutorProfilePayload);
        try {
            const profile = await this.tutorProfileService.createTutorProfile(tutorProfilePayload)
            return response.status(HttpStatus.CREATED).json({
                statusCode: 201,
                message: 'Profile Added sucessfully',
                profile
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Course not created!',
                error: 'Bad Request',
            });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateTutorProfile(
        @Res() response,
        @Param('id') profileId: string,
        @Body() profilePayload: TutorProfileDto
    ) {
        try {
            const profile = await this.tutorProfileService.updateTutorProfile(profilePayload, profileId);
            return response.status(HttpStatus.OK).json({
                message: 'Profile updated successfully',
                profile,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getTutorProfileById(@Res() response, @Param('id') profileId : string) {
        try {
            const profile = await this.tutorProfileService.getTutorProfileById(profileId);
            return response.status(HttpStatus.OK).json({
                message: 'Profile found successfully',
                data: profile,
            });
        } catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
            });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('userId/:id')
    async getTutorProfileByUserId(@Res() response, @Param('id')userId : string){
        try {
            const profile = await this.tutorProfileService.getProfileByUserId(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Profile found successfully',
                data: profile,
            });
        }
        catch (err) {
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
            });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('course/:id')
    async getAllProfilesByCourseName(@Res() response, @Param('id')courseName : string){
        try {
            const profile = await this.tutorProfileService.getAllProfilesByCourseName(courseName);
            return response.status(HttpStatus.OK).json({
                message: 'Profile found successfully',
                data: profile,
            });
        }
        catch (err) {
            // return response.status(err.status).json({
            //     errorMessage: err.message,
            //     errorCode: err.statusCode,
            // });
            return err
        }
    }
}