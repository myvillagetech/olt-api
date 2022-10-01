import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, HttpStatus, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleDto } from './dto/schedule.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleSearchCriteria } from './dto/scheduleSearchCriteria';

@Controller('schedule')
@ApiTags('schedule')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('')
  async createSchedule(@Res() response, @Body() schedulePayload: ScheduleDto) {
    try {
      const schedule = await this.scheduleService.createSchedule(schedulePayload)
      return response.status(HttpStatus.CREATED).json({
          message: 'Schedule Created sucessfully',
          schedule
      });
  } catch (error) {
      console.log(error);

      return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Course not created!',
          error: 'Bad Request',
      });
  }
  }

  @Delete('/:id')
  async deleteScheduleById(@Res() response, @Param('id') ScheduleId : string){
    try{
      const schedule = await this.scheduleService.deleteSchedule(ScheduleId)
      return response.status(HttpStatus.OK).json({
        message: 'Course deleted successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateScheduleById(@Res() response, @Param('id') ScheduleId : string, @Body() SchedulePayload : ScheduleDto){
    try{
      const schedule = await this.scheduleService.updateSchedule(SchedulePayload, ScheduleId );
      return response.status(HttpStatus.OK).json({
        message: 'Course Updated successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getScheduleByScheduleId(@Res() response, @Param('id') ScheduleId : string){
    try{
      const schedule = await this.scheduleService.getScheduleByScheduleId(ScheduleId );
      return response.status(HttpStatus.OK).json({
        message: 'Schedule found successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post('searchByCriteria')
  async getAllSchedulesBySearchByCriteria(@Res() response, @Body() scheduleSearchCriteria: ScheduleSearchCriteria){
      try {
          const schedules = await this.scheduleService.searchProfilesByCriteria(scheduleSearchCriteria);
          return response.status(HttpStatus.OK).json({
              message: schedules.length > 0 ? 'Schedules found successfully' : 'No schedule found',
              data: schedules,
              count: schedules.length
          });
      }
      catch (err) {
          return err
      }
  }
  
}
