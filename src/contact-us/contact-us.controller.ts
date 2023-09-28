import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { CreateContactUsDto } from './create-contact-us.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('contact-us')
@Controller('contact-us')
export class ContactUsController {
  constructor(
    private contactUsService: ContactUsService
) { }
@Post('')
async createContactUs(@Res() response, @Body() contatUsPayload: CreateContactUsDto) {
    try {
        const contactUs = await this.contactUsService.createContactUs(contatUsPayload)
        return response.status(HttpStatus.CREATED).json({
            message: 'Contactus Created sucessfully',
            contactUs
        });
    } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Contactus not created!',
            error: 'Bad Request',
        });
    }
}

@Put('/:id')
async updateContactUs(
    @Res() response,
    @Param('id') contactUsId: string,
    @Body() contactUsPayload: CreateContactUsDto
) {
    try {
        const contactUs = await this.contactUsService.updateCountactUs(contactUsPayload, contactUsId);
        return response.status(HttpStatus.OK).json({
            message: 'Contactus has been successfully updated',
            contactUs,
        });
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
}

@Get()
async getAllcontactUss(@Res() response) {
    try {
        const contactUsData = await this.contactUsService.getAllContactUs();
        return response.status(HttpStatus.OK).json({
            message: 'All Contactus data found successfully',
            data: contactUsData,
        });
    } catch (err) {
        return response.status(err.status).json({
            errorMessage: err.message,
            errorCode: err.statusCode,
        });
    }
}

@Delete('/:id')
async deletecontactUs(@Res() response, @Param('id') contactUsId: string) {
  try {
    const contactUs = await this.contactUsService.deleteContactUs(contactUsId);
    return response.status(HttpStatus.OK).json({
      message: 'Contactus deleted successfully',
      contactUs,
    });
  } catch (err) {
    return response.status(err.status).json(err.response);
  }
}

}
