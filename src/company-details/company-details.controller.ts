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

  @Post("save/termsAndConditions")
  async saveTermsAndConditions(
    @Res() response,
    @Body() companyDetailsPayload: CreateCompanyDetailDto
  ) {
    try {
      const privacyPolicy = await this.companyDetailsService.saveTermsAndConditions(
        companyDetailsPayload.content
      );
      return response.status(HttpStatus.CREATED).json({
        message: "Terms and conditions saved sucessfully",
        privacyPolicy,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Terms and conditions not saved!",
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

  @Get('/TermsAndConditions')
  async getTermsAndConditions(
    @Res() response,
  ){
    try {
      const termsAndConditions = await this.companyDetailsService.getTermsAndConditions();
      return response.status(HttpStatus.CREATED).json({
        message: "Terms and conditions fetched sucessfully",
        termsAndConditions,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Terms and conditions not fetched!",
        error: error,
      });
    }
  }

}
