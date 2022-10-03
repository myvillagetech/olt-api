import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RatingDto } from './rating.dto';
import { RatingsService } from './ratings.service';

@Controller('ratings')
@ApiTags('ratings')
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
}
