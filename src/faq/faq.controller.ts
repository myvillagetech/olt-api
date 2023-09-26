import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus, Res, } from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto, faqSearchByCrieriaDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';

@Controller('faq')
@ApiTags('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  async createFaq(@Body() createFaqDto: CreateFaqDto, @Res() response,) {
    try{
      let newFaq = await this.faqService.createFaq(createFaqDto);

      return response.status(HttpStatus.OK).json({
        message: "Faq created successfully",
        success: true,
        newFaq,
      });
    }catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "Unable to create Faq",
        error: error,
        success: false
      });
    }
  }

  @Put(':faqId')
  async updateFaq(@Res() response, @Param('faqId') faqId: string, @Body() updateFaqDto: UpdateFaqDto ) {
    try{
      let updatedFaq = await this.faqService.updateFaq(updateFaqDto, faqId);

      return response.status(HttpStatus.OK).json({
        message: "Faq updated successfully",
        success: true,
        updatedFaq,
      });
    }catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "Unable to update Faq",
        error: error,
        success: false
      });
    }
  }

  @Get(':id')
  async getFaqById(@Param('id') id: string, @Res() response) {
    try{
      let faq = await this.faqService.getFaqById(id);

      return response.status(HttpStatus.OK).json({
        message: "Faq fetched successfully",
        success: true,
        faq,
      });
    }catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "Unable to fetch Faq",
        error: error,
        success: false
      });
    }
  }


  @Delete(':id')
  async deleteFaq(@Param('id') id: string, @Res() response) {
    try{
      let faq = await this.faqService.deleteFaq(id);

      return response.status(HttpStatus.OK).json({
        message: "Faq deleted successfully",
        success: true,
        faq,
      });
    }catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "Unable to delete Faq",
        error: error,
        success: false
      });
    }
  }

  @Post('searchCriteria')
  async getFaqsBySearchCriteria(@Body() criteria: faqSearchByCrieriaDto, @Res() response) {
    try{
      let faqs = await this.faqService.faqSearchByCrieria(criteria);

      return response.status(HttpStatus.OK).json({
        message: "Faq fetched successfully",
        success: true,
        faqs,
      });
    }catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "Unable to fetch Faq",
        error: error,
        success: false
      });
    }
  }

}
