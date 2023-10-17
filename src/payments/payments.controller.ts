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
import { response } from "express";

const clientId = '0gEL7mW2SRekVMRVEk8-TA';
const clientSecret = 'uUxX4fonJrRboYsP0RjW8cfWsEIaqhr3';

const data = {
  grant_type: 'account_credentials', 
  account_id: '0gEL7mW2SRekVMRVEk8-TA',
};

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
      let scheduledata:any = await this.scheduleService.getScheduleByScheduleId(
        payload.scheduleIds[0]
      );
      // const templatePayloadForTutor = {
      //   templateName: "paymentAlertForTutor",
      //   // to: scheduledata?.tutor[0]?.email,
      //   to:"kanakaprasad.villagetech@gmail.com",
      //   studentName: scheduledata?.student[0]?.firstName,
      //   studentLastName: scheduledata?.student[0]?.lastName,
      //   tutorName: scheduledata?.tutor[0]?.firstName,
      //   tutorLastName: scheduledata?.tutor[0]?.lastName,
      //   subjects: scheduledata.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),
      //   paymentAmount: payload.amount,
      //   paymentDate: new Date(
      //     payload.paymentInfo.create_time
      //   ).toLocaleDateString("en-US", {
      //     year: "numeric",
      //     month: "long",
      //     day: "numeric",
      //   }),
      //   paymentMode: payload.paymentInfo.purchase_units[0].soft_descriptor || "UPI",
      //   paymentId: payload.paymentId,
      // };
       const  authToken= await this.paymentService.cerateAuthForZoom()

      const meetingDetails= await axios
       .post(
         "https://zoom.us/v2/users/me/meetings", {
          "agenda": "My Meeting",
          "default_password": false,
          "duration": 60,
          "password": "123456",
          "pre_schedule": false,
          "settings": {
            "additional_data_center_regions": [
              "TY"
            ],
            "allow_multiple_devices": true,
            "alternative_hosts_email_notification": true,
            "approval_type": 2,
            "approved_or_denied_countries_or_regions": {
              "approved_list": [
                "CX",
                "IN"
              ],
              "denied_list": [
                "CA"
              ],
              "enable": true,
              "method": "approve"
            },
            "audio": "telephony",
            "audio_conference_info": "test",
            "authentication_domains": "example.com",
            "authentication_exception": [
              {
                "email":scheduledata.tutor[0].email,
                "name": scheduledata.tutor[0].firstName
                
              }
            ],
            "authentication_option": "signIn_D8cJuqWVQ623CI4Q8yQK0Q",
            "auto_recording": "cloud",
            "breakout_room": {
              "enable": true,
              "rooms": [
                {
                  "name": "room1",
                  "participants": [
                    scheduledata.student[0].email
                  ]
                }
              ]
            },
            "calendar_type": 1,
            "close_registration": false,
            "contact_email": "Admin.villagetech@gmail.com",
            "contact_name": "villagetech admin",
            "email_notification": true,
            "encryption_type": "enhanced_encryption",
            "focus_mode": true,
            "host_video": true,
            "jbh_time": 0,
            "join_before_host": false,
            "meeting_authentication": false,
            "meeting_invitees": [
              {
                "email": scheduledata.student[0].email
              }
            ],
            "mute_upon_entry": false,
            "participant_video": false,
            "private_meeting": false,
            "registrants_confirmation_email": true,
            "registrants_email_notification": true,
            "registration_type": 1,
            "show_share_button": true,
            "use_pmi": false,
            "waiting_room": false,
            "watermark": false,
            "host_save_video_order": true,
            "alternative_host_update_polls": true
          },
          "start_time": scheduledata.slots[0].date,
          "template_id": "Dv4YdINdTk+Z5RToadh5ug==",
          "timezone": "Asia/Calcutta",
          "topic": scheduledata.subjects
            .map((subject: any) => subject.courseName.trim())
            .join(", "),
          "tracking_fields": [
            {
              "field": "field1",
              "value": "value1"
            }
          ],
          "type": 2
        }
        ,{
          headers: {
            'Authorization': `Bearer ${authToken.data.access_token}` // Set the Bearer token here
          }
        }
       )
       
      // axios
      //   .post(
      //     "http://3.128.227.249:4000/notification/notification/emailNotification",
      //     templatePayloadForTutor
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // const templatePayloadForStudent = {
      //   templateName: "paymentAlertForStudent",
      //   to: scheduledata.student[0].email,
      //   // to: "swathirekha.kasturi@gmail.com",
      //   studentName: scheduledata.student[0].firstName,
      //   studentLastName: scheduledata.student[0].lastName,
      //   tutorName: scheduledata.tutor[0].firstName,
      //   tutorLastName: scheduledata.tutor[0].lastName,
      //   subjects: scheduledata.subjects
      //     .map((subject: any) => subject.courseName.trim())
      //     .join(", "),

      //   scheduleDate: scheduledata.slots.map((slot) => {
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
      // };
    
      // axios
      //   .post(
      //    "http://3.128.227.249:4000/notification/emailNotification",
      //     templatePayloadForStudent
      //   )
      //   .then(function (response) {
      //     // console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
        const updatedScheduleData = await this.scheduleService.updateSchedule(
          { meetingLink:meetingDetails.data.join_url,meetingStartUrl:meetingDetails.data.start_url}, payload.scheduleIds[0]
        );
      return response.status(HttpStatus.CREATED).json({
        message: "Payment details added sucessfully",
        payment,updatedScheduleData
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

  @Get("getTotalAmount")
  async getTotalPaidAmount(@Res() response){
    try {
      const amount = await this.paymentService.getTotalPaidAmount();
      return response.status(HttpStatus.OK).json({
        message: "sucessfully Done",
        amount,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("payout/totalAmount/:tutorId")
  async getTutorAmount(@Res() response: any, @Param('tutorId')tutorId : string){
    try{
      const amount = await this.paymentService.getTotalAmountPaidToTutor(tutorId);

      return response.status(HttpStatus.OK).json({
        message: "sucessfully Done",
        amount,
      })
    }catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
