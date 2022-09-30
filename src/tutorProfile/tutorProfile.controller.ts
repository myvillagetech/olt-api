import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guards";
import { TutorProfileDto } from "./tutorProfile.dto";
import { IAvilableSlots } from "./tutorProfile.schema";
import { TutorProfileService } from "./tutorProfile.service";
import { TutorSearchCriteria } from "./tutorSearchCriteria.dto";

@ApiBearerAuth('access-token')
// @UseGuards(JwtAuthGuard)
@ApiTags('TutorProfile')
@Controller('tutorProfile')
export class TutorProfileController{
    constructor(
        private tutorProfileService: TutorProfileService
    ) { }
    @Post('')
    async createTutorProfile(@Res() response, @Body() tutorProfilePayload: TutorProfileDto ) {
        try {
            const profile = await this.tutorProfileService.createTutorProfile(tutorProfilePayload)
            return response.status(HttpStatus.CREATED).json({
                statusCode: 201,
                message: 'Profile Added sucessfully',
                profile
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('/slots/:id')
    async updateTutoProfileSlots(@Res() response, @Body() slots: IAvilableSlots[], @Param('id') profileId: string,) {
        try {
            const profile = await this.tutorProfileService.updateTutorSlots(slots, profileId)
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
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

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

    @Post('searchByCriteria')
    async getAllProfilesBySearchByCriteria(@Res() response, @Body() tutorSearchCriteria: TutorSearchCriteria){
        try {
            const profiles = await this.tutorProfileService.searchProfilesByCriteria(tutorSearchCriteria);
            return response.status(HttpStatus.OK).json({
                message: profiles.length > 0 ? 'Profile found successfully' : 'No profiles found',
                data: profiles,
            });
        }
        catch (err) {
            return err
        }
    }
}