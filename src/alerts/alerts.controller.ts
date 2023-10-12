import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException, Put } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('alerts')
@ApiTags('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post('')
    async createAlert(@Res() response, @Body() alertPayload: CreateAlertDto) {
        try {
            const alerts = await this.alertsService.createAlert(alertPayload)
            return response.status(HttpStatus.CREATED).json({
                statusCode: 201,
                message: 'Alert created sucessfully',
                alerts
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
  }

  @Get('user/:id')
  async getAllUserAlerts(@Res() response, @Param('id') id:any ){
    try{
      const alerts = await this.alertsService.getAllAlertsByUserId(id);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Alerts fetched sucessfully',
        alerts
    });
    } catch(error){
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteAlert(@Res() response, @Param('id') id:any){
    try{
      const alert = await this.alertsService.deleteAlert(id);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Alert deleted sucessfully',
        alert
    });
    } catch(error){
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('user/:id')
  async deleteuserAlerts(@Res() response, @Param('id') id:any){
    try{
      const alert = await this.alertsService.deleteAlluserAlerts(id);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'Alerts deleted sucessfully',
        alert
    });
    } catch(error){
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('readAll/user/:id')
  async markAlertAsRead(@Res() response, @Param('id') id:any){
    try{
      const alert = await this.alertsService.markAlertAsRead(id);
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'sucessfully Done',
        alert
    });
    } catch(error){
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
