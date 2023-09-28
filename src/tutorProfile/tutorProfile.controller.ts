import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guards";
import { BankAccount } from "src/shared/DTOs/BankAccount";
import { EducationQualification } from "src/shared/DTOs/EducationQualification";
import { TutorProfileDto } from "./tutorProfile.dto";
import { IAvilableSlots } from "./tutorProfile.schema";
import { TutorProfileService } from "./tutorProfile.service";
import { TutorSearchCriteria } from "./tutorSearchCriteria.dto";

// @ApiBearerAuth('access-token')
// @UseGuards(JwtAuthGuard)
@ApiTags('TutorProfile')
@Controller('tutorProfile')
export class TutorProfileController {
    constructor(
        private tutorProfileService: TutorProfileService
    ) { }
    @Post('')
    async createTutorProfile(@Res() response, @Body() tutorProfilePayload: TutorProfileDto) {
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
                message: 'Error: Slots not created!',
                error: 'Bad Request',
            });
        }
    }

    @Put('/bankAccount/:profileId')
    async updateTutorBankDetails(@Res() response, @Body() account: BankAccount, @Param('profileId') profileId: string) {
        try {
            const profile = await this.tutorProfileService.updateTutorBankDetails(account, profileId)
            return response.status(HttpStatus.CREATED).json({
                message: 'bank account Added sucessfully',
            });
        } catch (error) {
            console.log(error)
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error while updating bank account details!',
                error: 'Bad Request',
            });
        }
    }

    @Put('/educationQualification/:profileId')
    async updateTutorEducationQualification(@Res() response, @Body() qualification: EducationQualification, @Param('profileId') profileId: string) {
        try {
            const profile = await this.tutorProfileService.updateTutorEducationQualifications(qualification, profileId)
            return response.status(HttpStatus.CREATED).json({
                message: 'education qualifications Added sucessfully',
            });
        } catch (error) {
            console.log(error)
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error while updating education qualifications!',
                error: 'Bad Request'
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
    async getTutorProfileById(@Res() response, @Param('id') profileId: string) {
        try {
            const profile = await this.tutorProfileService.getTutorProfileById(profileId);
            return response.status(HttpStatus.OK).json({
                message: 'Profile found successfully',
                data: profile,
            });
        } catch (err) {
            console.log(err);
            return response.status(err.status).json({
                errorMessage: err.message,
                errorCode: err.statusCode,
            });
        }
    }

    @Get('userId/:id')
    async getTutorProfileByUserId(@Res() response, @Param('id') userId: string) {
        try {
            const profile = await this.tutorProfileService.getProfileByUserId(userId);
            return response.status(HttpStatus.OK).json({
                message: 'Profile found successfully',
                data: profile,
            });
        }
        catch (err) {
            throw new HttpException(err.message, err.response.statusCode === 404 ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST);
        }
    }

    @Get('course/:id')
    async getAllProfilesByCourseName(@Res() response, @Param('id') courseName: string) {
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
    async getAllProfilesBySearchByCriteria(@Res() response, @Body() tutorSearchCriteria: TutorSearchCriteria) {
        try {
            const data = await this.tutorProfileService.searchProfilesByCriteria(tutorSearchCriteria);
            return response.status(HttpStatus.OK).json({
                message: data[0].profiles.length > 0 ? 'Profiles found' : 'No Profiles found',
                data: data[0].profiles,
                count: data[0].profiles?.length,
                totalCount: data[0].metrics[0]?.totalCount
            });
        }
        catch (err) {
            return err
        }
    }
}