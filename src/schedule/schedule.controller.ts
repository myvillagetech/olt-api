import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, HttpStatus, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleDto } from './dto/schedule.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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

  @Get('')
  async getAllSchedules(@Res() response){
    try{
      const schedules = await this.scheduleService.getAllSchedules()
      return response.status(HttpStatus.OK).json({
        message : 'All schedules found successfully',
        data : schedules
      }); 
    } catch (err){
        return response.status(err.status).json({
          errorMessage: err.message,
          errorCode: err.statusCode,
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

  @Get('/student/:id')
  async getSchedulesByStudentId(@Res() response, @Param('id') StudentId : string){
    try{
      const schedule = await this.scheduleService.getSchedulesByStudentId(StudentId);
      return response.status(HttpStatus.OK).json({
        message: 'Schedules found successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/tutor/:id')
  async getSchedulesByTutorId(@Res() response, @Param('id') TutorId : string){
    try{
      const schedule = await this.scheduleService.getScheduleByTutorId(TutorId);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule found successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/start/:id')
  async getSchedulesByStart(@Res() response, @Param('id') start : string){
    try{
      const schedule = await this.scheduleService.getScheduleByStart(start);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule found successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/end/:id')
  async getSchedulesByEnd(@Res() response, @Param('id') end : string){
    try{
      const schedule = await this.scheduleService.getScheduleByEnd(end);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule found successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/cancel/:id')
  async cancelScheduleByScheduleId(@Res() response, @Param('id') ScheduleId : string){
    try{
      const schedule = await this.scheduleService.getScheduleByStart(ScheduleId);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule Cancelled successfully',
        schedule,
      });
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }




  


  
}
