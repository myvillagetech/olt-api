import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { ContactUsSchema } from './contact-us.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: MODEL_ENUMS.CONTACT_US, schema: ContactUsSchema}])],
  controllers: [ContactUsController],
  providers: [ContactUsService]
})
export class ContactUsModule {}
