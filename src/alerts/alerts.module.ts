import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsController } from './alerts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { AlertSchema } from './schema/alert.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.ALERT, schema: AlertSchema}])],
  controllers: [AlertsController],
  providers: [AlertsService],
  exports:[AlertsService]
})
export class AlertsModule {}
