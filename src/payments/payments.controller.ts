import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Payment } from './payment.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
@ApiTags('payments')
export class PaymentsController {

    constructor(private paymentService: PaymentsService) { }
    @Post('')
    async addPayment(
        @Res() response, @Body() payload: Payment
    ) {
        try {
            const payment = await this.paymentService.addPayment(payload)
            return response.status(HttpStatus.CREATED).json({
                message: 'Payment details added sucessfully',
                payment
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('/:paymentId')
    async getPayment(
        @Res() response, @Param('paymentId') paymentId: string
    ) {
        try {
            const payment = await this.paymentService.getPaymentDetails(paymentId)
            return response.status(HttpStatus.CREATED).json({
                message: 'Payment details retrieved sucessfully',
                payment
            });
        } catch (error) {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
