import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RatingDto, TutorAndStudent } from './rating.dto';
import { RatingsService } from './ratings.service';

@Controller('ratings')
@ApiTags('ratings')
// @UseGuards(JwtAuthGuard)
export class RatingsController {
    constructor(private readonly ratingService: RatingsService) { }
    @Post('')
    async createSchedule(@Res() response, @Body() payload: RatingDto) {
        try {
            const schedule = await this.ratingService.addOrUpdateRating(payload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Rating added sucessfully',
                schedule
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('getTutorRatingByStudent/')
    async getTutorRatingByStudent(@Res() response, @Body() payload: TutorAndStudent) {
        try {
            const schedule = await this.ratingService.getTutorRatingByStudent(payload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Rating found sucessfully',
                schedule
            });
        } catch (error) {
            throw new HttpException(error.message, 
                error.message === 'Rating Not found' ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST);
        }
    }

    @Get('/:tutorId')
    async getRatingByTutorId(@Res() response, @Param('tutorId') tutorId: string) {
        try {
            const ratings = await this.ratingService.getRatingByTutorId(tutorId)
            return response.status(HttpStatus.OK).json({
                message: ratings.length > 0 ? 'Ratings found sucessfully': 'No Ratings found' ,
                ratings
            });
        } catch (error) {
            throw new HttpException(error.message, 
                error.message === 'Ratings Not found' ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST);
        }
    }
}
