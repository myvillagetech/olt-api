import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ScheduleService } from 'src/schedule/schedule.service';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Payment } from './payment.dto';
import { IPaymentDocument } from './payment.schema';
import { PaymentSearchCriteria } from './paymentSearchCriteria';
import { Payout } from './payout';
import { IPayoutDocument } from './payout.schema';
import axios from "axios";

const data = {
    grant_type: 'account_credentials', 
    account_id: '0gEL7mW2SRekVMRVEk8-TA',
  };

@Injectable()
export class PaymentsService {
    constructor(private readonly scheduleService: ScheduleService,
        @InjectModel(MODEL_ENUMS.PAYMENT) private paymentModel: Model<IPaymentDocument>,
        @InjectModel(MODEL_ENUMS.PAYOUT) private payoutModel: Model<IPayoutDocument>) { }

    async addPayment(
        payload: Payment
    ) {
        try {
            const payment = new this.paymentModel(payload);
            const results = await payment.save();
            await this.scheduleService.updatedPaymentDetails(payload.scheduleIds, results["_id"], payload.status)
            return results;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

    async updateTutorPayout(
        payload: Payout
    ) {
        try {
            const payment = new this.payoutModel(payload);
            const results = await payment.save();
            await this.scheduleService.updatedtutorPayoutDetails(payload.scheduleIds, results["_id"])
            return results;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

     async cerateAuthForZoom(){
      return await  axios
        .post(
          "https://zoom.us/oauth/token", null, {
            params: data,
            auth: {
              username: "s5VyFqZmTbmPfp3wRBrU7w", 
              password: "uUxX4fonJrRboYsP0RjW8cfWsEIaqhr3", 
            },
          }
        )
        
    }

    async getPaymentDetails(
        paymentId: string
    ) {
        try {
            return this.paymentModel.aggregate([
                {
                    $match: { '_id': new Types.ObjectId(paymentId) }
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "Schedules",
                    }
                }
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

    async getPayoutDetails(
        payoutId: string
    ) {
        try {
            return this.payoutModel.aggregate([
                {
                    $match: { '_id': new Types.ObjectId(payoutId) }
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "Schedules",
                    }
                }
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }

    async getPaymentsCriteria(
        criteria: PaymentSearchCriteria
    ) {
        try {
            const preJoinFilters = [];
            if (criteria.paymentId) {
                preJoinFilters.push({ 'paymentId': criteria.paymentId })
            }
            const postJoinFilters = [];

            if (criteria.studentId) {
                postJoinFilters.push({ 'schedules.student': new Types.ObjectId(criteria.studentId) })
            }

            if (criteria.tutorId) {
                postJoinFilters.push({ 'schedules.tutor': new Types.ObjectId(criteria.tutorId) })
            }

            const paginationProps = [];
            if (
                (criteria.pageSize || criteria.pageSize > 0) &&
                (criteria.pageNumber || criteria.pageNumber === 0)
            ) {
                paginationProps.push({
                    $skip: criteria.pageNumber * criteria.pageSize,
                });
                paginationProps.push({ $limit: criteria.pageSize });
            }

            return this.paymentModel.aggregate([
                {
                    $match: preJoinFilters.length > 0 ? { $and: preJoinFilters } : {}
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "schedules",
                    }
                },
                {
                    $match: postJoinFilters.length > 0 ? { $and: postJoinFilters } : {}
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "schedules.student",
                        foreignField: "_id",
                        as: "student",
                        "pipeline": [
                            { "$project": { "password": 0, "userId": 0 } }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "schedules.tutor",
                        foreignField: "_id",
                        as: "tutor",
                        "pipeline": [
                            { "$project": { "password": 0, "userId": 0 } }
                        ]
                    }
                },
                {
                    $facet: {
                        payments: paginationProps,
                        metrics: [
                            { $count: "totalCount" },
                        ],
                    },
                },
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAllUnpaidSchdulesByTutorId(tutorId: string) {
        const result = await this.scheduleService.getScheduleModel().aggregate([
            {
                $match: {
                    $and: [
                        { paymentId: { $exists: true } },
                        { paymentId: { $ne: null } },
                        { payoutId: { $exists: false } },
                        { tutor: new Types.ObjectId(tutorId) }
                    ],
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "student",
                    foreignField: "_id",
                    as: "student",
                }
            }
        ]);

        return result.map(r => ({ ...r, student: r.student[0] }))
    }

    async getAllUnpaidTutors() {
        const result = await this.scheduleService.getScheduleModel().aggregate([
            {
                $match: {
                    $and: [
                        { paymentId: { $exists: true } },
                        { paymentId: { $ne: null } },
                        { payoutId: { $exists: false } }
                    ],
                }
            },
            {
                $group: {
                    _id: '$tutor'
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "tutorObj",
                }
            }
        ]);

        return result.map(r => {
            return r.tutorObj[0];
        })
    }

    async getTotalPaidAmount() {
        const result = this.paymentModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmountReceived: { $sum: '$amount' },
                },
            },
        ]);
        return result;
    }

    async getTotalAmountPaidToTutor(tutorId: string): Promise<any>{
        const result = this.payoutModel.aggregate([
            {
                $lookup: {
                    from: 'schedules', // The name of the Schedule collection in your database
                    localField: 'scheduleIds',
                    foreignField: '_id',
                    as: 'scheduleIds',
                },
            },
            
            {
                $match: {
                    'scheduleIds.tutor': new Types.ObjectId(tutorId),
                }
            },

            {
                $group: {
                    _id: null,
                    totalAmount: {$sum: '$amount'}
                }
            }
        ])
        return result
    }

    async getMonthlyStatistics(year: number): Promise<any> {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);

        const payments = await this.paymentModel.find({
            'createdAt': { $gte: startDate, $lte: endDate },
        });

        const payouts = await this.payoutModel.find({
            'createdAt': { $gte: startDate, $lte: endDate },
        });

        const totalAmountByMonth: any[] = [0,0,0,0,0,0,0,0,0,0,0,0];

        payments.forEach((payment: any) => {
            const paymentDate = payment.createdAt; 
            const monthName = paymentDate.getMonth();
            totalAmountByMonth[monthName] += payment.amount;
        });

        const totalPayoutByMonth: any[] = [0,0,0,0,0,0,0,0,0,0,0,0];

        payouts.forEach((payment: any) => {
            const paymentDate = payment.createdAt; 
            const monthName = paymentDate.getMonth();
            totalPayoutByMonth[monthName] += payment.amount;
        });

        return {payments : totalAmountByMonth, payouts: totalPayoutByMonth};
    }

    async tutorReceviedPayoutsStatistics(year: number, tutor: string){
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);
        const preJoinFilters = [{
            'createdAt': { $gte: startDate, $lte: endDate },
        }];
        const postJoinFilters = [{ 'schedules.tutor': new Types.ObjectId(tutor) }];
        let results: any = await this.payoutModel.aggregate([
            {
                $match: preJoinFilters.length > 0 ? { $and: preJoinFilters } : {}
            },
            {
                $lookup: {
                    from: "schedules",
                    localField: "scheduleIds",
                    foreignField: "_id",
                    as: "schedules",
                }
            },
            {
                $match: postJoinFilters.length > 0 ? { $and: postJoinFilters } : {}
            },
        ]);

        const tutorPayoutByMonth: any[] = [0,0,0,0,0,0,0,0,0,0,0,0];

        results.forEach((payment: any) => {
            const paymentDate = payment.createdAt; 
            const monthName = paymentDate.getMonth();
            tutorPayoutByMonth[monthName] += payment.amount;
        });

        return tutorPayoutByMonth;
    }

    async getPayoutCriteria(
        criteria: PaymentSearchCriteria
    ) {
        try {
            const preJoinFilters = [];
            if (criteria.paymentId) {
                preJoinFilters.push({ 'paymentId': criteria.paymentId })
            }
            const postJoinFilters = [];

            if (criteria.studentId) {
                postJoinFilters.push({ 'schedules.student': new Types.ObjectId(criteria.studentId) })
            }

            if (criteria.tutorId) {
                postJoinFilters.push({ 'schedules.tutor': new Types.ObjectId(criteria.tutorId) })
            }

            const paginationProps = [];
            if (
                (criteria.pageSize || criteria.pageSize > 0) &&
                (criteria.pageNumber || criteria.pageNumber === 0)
            ) {
                paginationProps.push({
                    $skip: criteria.pageNumber * criteria.pageSize,
                });
                paginationProps.push({ $limit: criteria.pageSize });
            }

            return this.payoutModel.aggregate([
                {
                    $match: preJoinFilters.length > 0 ? { $and: preJoinFilters } : {}
                },
                {
                    $lookup: {
                        from: "schedules",
                        localField: "scheduleIds",
                        foreignField: "_id",
                        as: "schedules",
                    }
                },
                {
                    $match: postJoinFilters.length > 0 ? { $and: postJoinFilters } : {}
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "schedules.student",
                        foreignField: "_id",
                        as: "student",
                        "pipeline": [
                            { "$project": { "password": 0, "userId": 0 } }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "schedules.tutor",
                        foreignField: "_id",
                        as: "tutor",
                        "pipeline": [
                            { "$project": { "password": 0, "userId": 0 } }
                        ]
                    }
                },
                {
                    $facet: {
                        payments: paginationProps,
                        metrics: [
                            { $count: "totalCount" },
                        ],
                    },
                },
            ]);

        } catch (error) {
            console.log(error);
            throw new HttpException(
                `Something went wrong ... Please try again`,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }



}
