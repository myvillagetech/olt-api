import { Body, Controller, HttpException, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RatingDto } from './rating.dto';
import { RatingsService } from './ratings.service';

@Controller('ratings')
@ApiTags('ratings')
@UseGuards(JwtAuthGuard)
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
