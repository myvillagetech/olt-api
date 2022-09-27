import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleSchema } from './schedule.schema';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';

@Module({
  imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.SCHEDULE, schema: ScheduleSchema}])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports : [ScheduleService]
})
export class ScheduleModule {}
