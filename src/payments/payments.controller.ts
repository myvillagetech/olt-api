import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Payment } from "./payment.dto";
import { PaymentsService } from "./payments.service";
import { PaymentSearchCriteria } from "./paymentSearchCriteria";
import { Payout } from "./payout";
import axios from "axios";
import { ScheduleService } from "src/schedule/schedule.service";

@Controller("payments")
@ApiTags("payments")
export class PaymentsController {
  constructor(
    private paymentService: PaymentsService,
    private scheduleService: ScheduleService
  ) {}
  @Post("/updatePayment")
  async addPayment(@Res() response, @Body() payload: any) {
    try {
      const payment = await this.paymentService.addPayment(payload);
      const scheduledata = await this.scheduleService.getScheduleByScheduleId(
        payload.scheduleIds[0]
      );
      const templatePayloadForTutor = {
        templateName: "paymentAlertForTutor",
        // to: scheduledata.tutor[0].email,
        to:"swathi.villagetech@gmail.com",
        studentName: scheduledata.student[0].firstName,
        studentLastName: scheduledata.student[0].lastName,
        tutorName: scheduledata.tutor[0].firstName,
        tutorLastName: scheduledata.tutor[0].lastName,
        subjects: scheduledata.subjects
          .map((subject: any) => subject.courseName.trim())
          .join(", "),
        paymentAmount: payload.amount,
        paymentDate: new Date(
          payload.paymentInfo.create_time
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        paymentMode: payload.paymentInfo.purchase_units[0].soft_descriptor,
        paymentId: payload.paymentId,
      };
      axios
        .post(
          "http://localhost:6004/notification/emailNotification",
          templatePayloadForTutor
        )
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      const templatePayloadForStudent = {
        templateName: "paymentAlertForStudent",
        // to: scheduledata.student[0].email,
        to: "swathirekha.kasturi@gmail.com",
        studentName: scheduledata.student[0].firstName,
        studentLastName: scheduledata.student[0].lastName,
        tutorName: scheduledata.tutor[0].firstName,
        tutorLastName: scheduledata.tutor[0].lastName,
        subjects: scheduledata.subjects
          .map((subject: any) => subject.courseName.trim())
          .join(", "),

        scheduleDate: scheduledata.slots.map((slot) => {
          const formattedDate = slot.date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const formattedFromTime = formatTime(slot.from);
          const formattedToTime = formatTime(slot.to);
          function formatTime(hour: any) {
            const ampm = hour >= 12 ? "PM" : "AM";
            const formattedHour = hour % 12 || 12;
            return `${formattedHour}:${"00"} ${ampm}`;
          }

          return ` ${formattedDate}, From: ${formattedFromTime}, To: ${formattedToTime}`;
        }),
      };
      console.log(templatePayloadForStudent.scheduleDate);
      axios
        .post(
          "http://localhost:6004/notification/emailNotification",
          templatePayloadForStudent
        )
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      return response.status(HttpStatus.CREATED).json({
        message: "Payment details added sucessfully",
        payment,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("/updateTutorPayout")
  async updateTutorPayout(@Res() response, @Body() payload: Payout) {
    try {
      const payment = await this.paymentService.updateTutorPayout(payload);
      return response.status(HttpStatus.CREATED).json({
        message: "Payout details added sucessfully",
        payment,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("details/:paymentId")
  async getPayment(@Res() response, @Param("paymentId") paymentId: string) {
    try {
      const payment = await this.paymentService.getPaymentDetails(paymentId);
      return response.status(HttpStatus.CREATED).json({
        message: "Payment details retrieved sucessfully",
        payment,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("payout-details/:payoutId")
  async getPayout(@Res() response, @Param("payoutId") payoutId: string) {
    try {
      const payment = await this.paymentService.getPayoutDetails(payoutId);
      return response.status(HttpStatus.CREATED).json({
        message: "payout details retrieved sucessfully",
        payment,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("getPaymentsCriteria")
  async getPaymentsCriteria(
    @Res() response,
    @Body() criteria: PaymentSearchCriteria
  ) {
    try {
      const payment = await this.paymentService.getPaymentsCriteria(criteria);
      return response.status(HttpStatus.OK).json({
        message: "Payment details retrieved sucessfully",
        payment,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("getAllUnpaidTutors")
  async getAllUnpaidTutors() {
    return await this.paymentService.getAllUnpaidTutors();
  }

  @Get("getAllUnpaidSchedulesByTutorid/:tutorId")
  async getAllUnpaidSchedulesByTutorid(@Param("tutorId") tutorId: string) {
    return await this.paymentService.getAllUnpaidSchdulesByTutorId(tutorId);
  }
}
