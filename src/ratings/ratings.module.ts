import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { RatingSchema } from './rating.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: MODEL_ENUMS.RATING, schema: RatingSchema }])],
    providers: [RatingsService],
    controllers: [RatingsController]
})
export class RatingsModule { }
