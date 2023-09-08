import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, HttpStatus, Put, HttpException, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleDto, PaymentInformation, AcceptScheduleDto } from './dto/schedule.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleSearchCriteria } from './dto/scheduleSearchCriteria';
import { query } from 'express';

@Controller('schedule')
@ApiTags('schedule')
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth('access-token')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post('')
  async createSchedule(@Res() response, @Body() schedulePayload: ScheduleDto) {
    try {
      const schedule = await this.scheduleService.createSchedule(schedulePayload)
      return response.status(HttpStatus.CREATED).json({
        message: 'Schedule Created sucessfully',
        schedule
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('/:id')
  async deleteScheduleById(@Res() response, @Param('id') ScheduleId: string) {
    try {
      const schedule = await this.scheduleService.deleteSchedule(ScheduleId)
      return response.status(HttpStatus.OK).json({
        message: 'Course deleted successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateScheduleById(@Res() response, @Param('id') ScheduleId: string, @Body() SchedulePayload: ScheduleDto) {
    try {
      const schedule = await this.scheduleService.updateSchedule(SchedulePayload, ScheduleId);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule Updated successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post('/acceptSchdule')
  async acceptSchdule(@Res() response, @Body() payload: AcceptScheduleDto) {
    try {
      const schedule = await this.scheduleService.updateScheduleStatus(payload.id, 'ACCEPTED', {amount: payload.amount});
      return response.status(HttpStatus.OK).json({
        message: 'Schedule accpeted successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    
  }

  // @Put('updatePayment/:id')
  // async updatePaymentInfoSchedule(@Res() response, @Param('id') ScheduleId: string, @Body() paymentInformation: PaymentInformation) {
  //   try {
  //     const schedule = await this.scheduleService.updatePaymentInfoSchedule(paymentInformation, ScheduleId);
  //     return response.status(HttpStatus.OK).json({
  //       message: 'paymentInformation Updated successfully',
  //       schedule,
  //     });
  //   } catch (err) {
  //     return response.status(err.status).json(err.response);
  //   }
  // }

  @Get('/student-schedule-counts')
  async getStudentScheduleCounts(@Res() response, @Query() user:any, ) {
    try {
      const schedule = await this.scheduleService.getScheduleByStatus(user);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule status details for student found successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/tutor-schedule-counts')
  async getTutorScheduleCounts(@Res() response, @Query() user:any, ) {
    try {
      const schedule = await this.scheduleService.getScheduleByStatus(user);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule status details for tutor found successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/admin-schedule-counts')
  async getadminScheduleCounts(@Res() response ) {
    try {
      const schedule = await this.scheduleService.getAdminScheduleByStatus();
      return response.status(HttpStatus.OK).json({
        message: 'Schedule status details for admin found successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  

  @Get('/:id')
  async getScheduleByScheduleId(@Res() response, @Param('id') ScheduleId: string) {
    try {
      const schedule = await this.scheduleService.getScheduleByScheduleId(ScheduleId);
      return response.status(HttpStatus.OK).json({
        message: 'Schedule found successfully',
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post('searchByCriteria')
  async getAllSchedulesBySearchByCriteria(@Res() response, @Body() scheduleSearchCriteria: ScheduleSearchCriteria) {
    try {
      const schedulesData = await this.scheduleService.getAllSchedulesBySearchByCriteria(scheduleSearchCriteria);
      return response.status(HttpStatus.OK).json({
        message: schedulesData[0].schedules.length > 0 ? 'Schedules found successfully' : 'No schedule found',
        data: schedulesData[0].schedules,
        count: schedulesData[0].schedules?.length,
        totalCount: schedulesData[0].metrics[0]?.totalCount
      });
    }
    catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

}
