import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { MessageSchema } from './message.schema';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';


@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [MongooseModule.forFeature([{ name: MODEL_ENUMS.MESSAGE, schema: MessageSchema }])],
})
export class MesseagesModule {}
