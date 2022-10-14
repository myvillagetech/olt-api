import { Body, Controller, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FromAndTo, MessageDto } from './message.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
@ApiTags('messages')
export class MessagesController {

    constructor(private readonly service: MessagesService) {}

    @Post('send')
    async sendMessage(@Res() response, @Body() messageDto: MessageDto) {
        try {
            await this.service.sendMessage(messageDto);

            return response.status(HttpStatus.CREATED).json({
                message: 'Message sent sucessfully',
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('getAllByFromAndTo')
    async getAllMessagesByFromAndTo(@Res() response, @Body() payload: FromAndTo) {
        try {
            let results = await this.service.getAllMessagesByFromAndTo(payload);

            return response.status(HttpStatus.OK).json({
                message: 'Message retrived sucessfully',
                results
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('getAllMessagedUsers/:userId')
    async getAllMessagedUsers(@Res() response, @Param('userId') user: string) {
        try {
            let users = await this.service.getAllMessagedUsers(user);

            return response.status(HttpStatus.OK).json({
                message: 'Message sent sucessfully',
                users
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
