import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
  HttpStatus,
  Put,
  HttpException,
  Query,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import axios from "axios";
import { ScheduleService } from './schedule.service';
import { ScheduleDto, PaymentInformation, AcceptScheduleDto, RejectScheduleDto } from './dto/schedule.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScheduleSearchCriteria } from './dto/scheduleSearchCriteria';
import { query } from 'express';
import { DateRange } from 'src/shared/DTOs/dateRange';
import { Status } from './schedule.status';
import { PayoutSchema } from 'src/payments/payout.schema';

@Controller("schedule")
@ApiTags("schedule")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth('access-token')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly usersService: UsersService
  ) {}

  @Post("")
  async createSchedule(@Res() response, @Body() schedulePayload: ScheduleDto) {
    try {
      const schedule = await this.scheduleService.createSchedule(
        schedulePayload
      );
      return response.status(HttpStatus.OK).json({
        message: "Schedule created successfully",
        schedule,
      });
      // const tutorDetails = await this.usersService.getUser(
      //   schedulePayload.tutor
      // );
      // const studentDetails = await this.usersService.getUser(
      //   schedulePayload.student
      // );
      // if (!tutorDetails) {
      //   throw new NotFoundException(`user #${schedulePayload.tutor} not found`);
      // }
      // const templatePayloadForTutor = {
      //   ...schedulePayload,
      //   templateName: "bookingAlertForTutor",
      //   to:tutorDetails.email,
      //   // to: "villagetechvenkat@gmail.com",
      //   tutorName: tutorDetails.firstName,
      //   tutorLastName: tutorDetails.lastName,
      //   studentName: studentDetails.firstName,
      //   studentLastName: studentDetails.lastName,
      //   subjects: schedulePayload.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      //   slots: schedulePayload.slots
      //     .map((slot) => {
      //       const date = new Date(slot.date);
      //       const formattedDate = date.toLocaleDateString("en-US", {
      //         year: "numeric",
      //         month: "long",
      //         day: "numeric",
      //       });
      //       return formattedDate;
      //     })
      //     .join("; "),
      // };
      // axios
      //   .post(
      //     "http://localhost:6004/notification/emailNotification",
      //     templatePayloadForTutor
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // const templatePayloadForStudent = {
      //   ...schedulePayload,
      //   templateName: "bookingAlertForStudent",
      //   to:studentDetails.email,
      //   // to: "swathirekha.kasturi@gmail.com",
      //   studentName: studentDetails.firstName,
      //   studentLastName: studentDetails.lastName,
      //   tutorName: tutorDetails.firstName,
      //   tutorLastName: tutorDetails.lastName,
      //   subjects: schedulePayload.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      //   slots: schedulePayload.slots
      //     .map((slot) => {
      //       const date = new Date(slot.date);
      //       const formattedDate = date.toLocaleDateString("en-US", {
      //         year: "numeric",
      //         month: "long",
      //         day: "numeric",
      //       });
      //       return formattedDate;
      //     })
      //     .join("; "),
      // };
      // axios
      //   .post(
      //     "http://localhost:6004/notification/emailNotification",
      //     templatePayloadForStudent
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete("/:id")
  async deleteScheduleById(@Res() response, @Param("id") ScheduleId: string) {
    try {
      const schedule = await this.scheduleService.deleteSchedule(ScheduleId);
      return response.status(HttpStatus.OK).json({
        message: "Schedule deleted successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put("/:id")
  async updateScheduleById(
    @Res() response,
    @Param("id") ScheduleId: string,
    @Body() SchedulePayload: ScheduleDto
  ) {
    try {
      const schedule = await this.scheduleService.updateSchedule(
        SchedulePayload,
        ScheduleId
      );
      return response.status(HttpStatus.OK).json({
        message: "Schedule Updated successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post("/requestSchedule/:id")
  async requestSchedule(@Res() response, @Param('id') id: string){
    try {
      const schedule = await this.scheduleService.updateScheduleStatus(
        id,
        "REQUESTED",
        {}
      );
      return response.status(HttpStatus.OK).json({
        message : "Schedule requested successfully",
        data: schedule,
      });
    } catch (error){
      return response.status(error.status).json(error.response);
    }
  }

  @Post("/acceptSchdule")
  async acceptSchdule(@Res() response, @Body() payload: AcceptScheduleDto) {
    try {
      const schedule = await this.scheduleService.updateScheduleStatus(
        payload.id,
        "ACCEPTED",
        { amount: payload.amount }
      );
      const scheduledata: any =
        await this.scheduleService.getScheduleByScheduleId(payload.id);
      // const templatePayload = {
      //   ...scheduledata,
      //   templateName: "bookingConformationForStudent",
      //   to: scheduledata.student[0].email,
      //   // to:"swathirekha.kasturi@gmail.com",
      //   studentName: scheduledata.student[0].firstName,
      //   studentLastName: scheduledata.student[0].lastName,
      //   tutorName: scheduledata.tutor[0].firstName,
      //   tutorLastName: scheduledata.tutor[0].lastName,
      //   slots:scheduledata.slots.map((slot) => {
      //     const formattedDate = slot.date.toLocaleString("en-US", {
      //       weekday: "long",
      //       year: "numeric",
      //       month: "long",
      //       day: "numeric",
      //     });
      //     const formattedFromTime = formatTime(slot.from);
      //     const formattedToTime = formatTime(slot.to);
      //     function formatTime(hour: any) {
      //       const ampm = hour >= 12 ? "PM" : "AM";
      //       const formattedHour = hour % 12 || 12;
      //       return `${formattedHour}:${"00"} ${ampm}`;
      //     }
      //     return ` ${formattedDate}, From: ${formattedFromTime}, To: ${formattedToTime}`;
      //   }),
      //   subjects: scheduledata.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      // };
      

      // axios
      //   .post(
      //     "http://localhost:6004/notification/emailNotification",
      //     templatePayload
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   });
      return response.status(HttpStatus.OK).json({
        message: "Schedule accpeted successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post("/rejectSchdule")
  async rejectSchdule(@Res() response, @Body() payload: any) {
    try {
      if (!payload.reason) {
        return response.status(400).json({
          message: "Reason required",
        });
      }
      const schedule = await this.scheduleService.updateScheduleStatus(
        payload.id,
        Status.REJECTED,
        { rejectedNote: payload.reason }
      );
      const scheduledata: any =
        await this.scheduleService.getScheduleByScheduleId(payload.id);
      // const templatePayload = {
      //   ...scheduledata,
      //   templateName: "tutorRejectsStudent",
      //   // to: scheduledata.student[0].email,
      //   to:"swathirekha.kasturi@gmail.com",
      //   studentName: scheduledata.student[0].firstName,
      //   studentLastName: scheduledata.student[0].lastName,
      //   tutorName: scheduledata.tutor[0].firstName,
      //   tutorLastName: scheduledata.tutor[0].lastName,
      //   subjects: scheduledata.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      //   reason: payload.reason,
      // };

      // axios
      //   .post(
      //     "http://localhost:6004/notification/emailNotification",
      //     templatePayload
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   });

      return response.status(HttpStatus.OK).json({
        message: "Schedule rejected successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post("/cancelSchdule")
  async cancelSchdule(@Res() response, @Body() payload: any) {
    try {
      if (!payload.reason) {
        return response.status(400).json({
          message: "Reason required",
        });
      }

      const schedule = await this.scheduleService.updateScheduleStatus(
        payload.id,
        Status.CANCELLED,
        { rejectedNote: payload.reason }
      );

      const scheduledata: any =
        await this.scheduleService.getScheduleByScheduleId(payload.id);
      // const templatePayload = {
      //   ...scheduledata,
      //   templateName: "studentCancelCourse",
      //   // to: scheduledata.tutor[0].email,
      //   to:"swathi.villagetech@gmail.com",
      //   studentName: scheduledata.student[0].firstName,
      //   studentLastName: scheduledata.student[0].lastName,
      //   tutorName: scheduledata.tutor[0].firstName,
      //   tutorLastName: scheduledata.tutor[0].lastName,
      //   subjects: scheduledata.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      //   slots: scheduledata.slots
      //     .map((slot) => {
      //       const date = new Date(slot.date);
      //       const formattedDate = date.toLocaleDateString("en-US", {
      //         year: "numeric",
      //         month: "long",
      //         day: "numeric",
      //       });
      //       return formattedDate;
      //     })
      //     .join("; "),
      //   reason: payload.reason,
      // };

      // axios
      //   .post(
      //     "http://localhost:6004/notification/emailNotification",
      //     templatePayload
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   });
      return response.status(HttpStatus.OK).json({
        message: "Schedule rejected successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/completed/:id')
  async completedSchdule(@Res() response,   @Param('id') ScheduleId: string,) {
    try {
      const schedule = await this.scheduleService.updateScheduleStatus(ScheduleId, Status.COMPLETED,{});
      return response.status(HttpStatus.OK).json({
        message: "Schedule completed successfully",
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

  @Get("/student-schedule-counts")
  async getStudentScheduleCounts(@Res() response, @Query() user: any) {
    try {
      const schedule = await this.scheduleService.getScheduleByStatus(user);
      return response.status(HttpStatus.OK).json({
        message: "Schedule status details for student found successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get("/tutor-schedule-counts")
  async getTutorScheduleCounts(@Res() response, @Query() user: any) {
    try {
      const schedule = await this.scheduleService.getScheduleByStatus(user);
      return response.status(HttpStatus.OK).json({
        message: "Schedule status details for tutor found successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get("/admin-schedule-counts")
  async getadminScheduleCounts(@Res() response) {
    try {
      const schedule = await this.scheduleService.getAdminScheduleByStatus();
      return response.status(HttpStatus.OK).json({
        message: "Schedule status details for admin found successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get("/:id")
  async getScheduleByScheduleId(
    @Res() response,
    @Param("id") ScheduleId: string
  ) {
    try {
      const schedule = await this.scheduleService.getScheduleByScheduleId(
        ScheduleId
      );
      return response.status(HttpStatus.OK).json({
        message: "Schedule found successfully",
        schedule,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post("searchByCriteria")
  async getAllSchedulesBySearchByCriteria(
    @Res() response,
    @Body() scheduleSearchCriteria: ScheduleSearchCriteria
  ) {
    try {
      const schedulesData =
        await this.scheduleService.getAllSchedulesBySearchByCriteria(
          scheduleSearchCriteria
        );
      return response.status(HttpStatus.OK).json({
        message:
          schedulesData[0].schedules.length > 0
            ? "Schedules found successfully"
            : "No schedule found",
        data: schedulesData[0].schedules,
        count: schedulesData[0].schedules?.length,
        totalCount: schedulesData[0].metrics[0]?.totalCount,
      });
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("latest-updated-schedules/tutor:tutorId")
  async getLatestUpdatedTutorSchedules(
    @Res() response,
    @Param("tutorId") tutorId: string
  ) {
    try {
      const scheduleSearchCriteria: ScheduleSearchCriteria = {
        sortOrder: -1,
        sortField: "updatedAt",
        studentIds: [],
        tutorIds: [tutorId],
        subjects: [],
        status: [],
        pageNumber: 0,
        pageSize: 5,
        dateRange: new DateRange(),
        searchTerm: ''
      };
      const schedulesData =
        await this.scheduleService.getAllSchedulesBySearchByCriteria(
          scheduleSearchCriteria
        );
      return response.status(HttpStatus.OK).json({
        message:
          schedulesData[0].schedules.length > 0
            ? "Schedules found successfully"
            : "No schedule found",
        data: schedulesData[0].schedules,
        count: schedulesData[0].schedules?.length,
        totalCount: schedulesData[0].metrics[0]?.totalCount,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("latest-updated-schedules/:studentId")
  async getLatestUpdatedSchedules(
    @Res() response,
    @Param("studentId") studentId: string
  ) {
    try {
      const scheduleSearchCriteria: ScheduleSearchCriteria = {
        sortOrder: -1,
        sortField: "updatedAt",
        studentIds: [studentId],
        tutorIds: [],
        subjects: [],
        status: [],
        pageNumber: 0,
        pageSize: 5,
        dateRange: new DateRange(),
        searchTerm: ''
      };
      const schedulesData =
        await this.scheduleService.getAllSchedulesBySearchByCriteria(
          scheduleSearchCriteria
        );
      return response.status(HttpStatus.OK).json({
        message:
          schedulesData[0].schedules.length > 0
            ? "Schedules found successfully"
            : "No schedule found",
        data: schedulesData[0].schedules,
        count: schedulesData[0].schedules?.length,
        totalCount: schedulesData[0].metrics[0]?.totalCount,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

}
