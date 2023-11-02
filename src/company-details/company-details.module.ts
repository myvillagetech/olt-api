import { Module } from '@nestjs/common';
import { CompanyDetailsService } from './company-details.service';
import { CompanyDetailsController } from './company-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { CompanyDetailsSchema } from './schemas/company-detail.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: MODEL_ENUMS.COMPANY_DETAILS,
    schema: CompanyDetailsSchema
  }])],
  controllers: [CompanyDetailsController],
  providers: [CompanyDetailsService]
})
export class CompanyDetailsModule {}
