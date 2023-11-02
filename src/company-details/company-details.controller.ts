import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { CompanyDetailsService } from "./company-details.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateCompanyDetailDto } from "./dto/create-company-detail.dto";

@ApiTags("companyDetails")
@Controller("company-details")
export class CompanyDetailsController {
  constructor(private readonly companyDetailsService: CompanyDetailsService) {}

  @Post("save/privacyPolicy")
  async savePrivactPolicy(
    @Res() response,
    @Body() companyDetailsPayload: CreateCompanyDetailDto
  ) {
    try {
      const privacyPolicy = await this.companyDetailsService.savePrivacyPolicy(
        companyDetailsPayload.content
      );
      return response.status(HttpStatus.CREATED).json({
        message: "Privacy Policy saved sucessfully",
        privacyPolicy,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: privacyPolicy not saved!",
        error: error,
      });
    }
  }

  @Post("save/aboutCompany")
  async saveAboutCompany(
    @Res() response,
    @Body() companyDetailsPayload: CreateCompanyDetailDto
  ) {
    try {
      const aboutCompany = await this.companyDetailsService.saveAboutCompany(
        companyDetailsPayload.content
      );
      return response.status(HttpStatus.CREATED).json({
        message: "About Company saved sucessfully",
        aboutCompany,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: About Company not saved!",
        error: error,
      });
    }
  }

  @Get('/PrivacyPolicy')
  async getPrivacyPolicy(
    @Res() response,
  ){
    try {
      const privacyPolicy = await this.companyDetailsService.getPrivacyPolicy();
      return response.status(HttpStatus.CREATED).json({
        message: "Privacy policy fetched sucessfully",
        privacyPolicy,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Privacy policy not fetched!",
        error: error,
      });
    }
  }

  @Get('/AboutCompany')
  async getTermsAndConditions(
    @Res() response,
  ){
    try {
      const aboutCompany = await this.companyDetailsService.getAboutCompany();
      return response.status(HttpStatus.CREATED).json({
        message: "About Company fetched sucessfully",
        aboutCompany,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: About Company not fetched!",
        error: error,
      });
    }
  }

}
