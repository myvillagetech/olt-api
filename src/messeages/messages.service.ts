import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { FromAndTo, MessageDto } from './message.dto';
import { IMessageDocument } from './message.schema';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(MODEL_ENUMS.MESSAGE) private messageModel: Model<IMessageDocument>) { }

    sendMessage(messageDto: MessageDto) {
        try {
            const message = new this.messageModel(messageDto);

            return message.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllMessagesByFromAndTo(dto: FromAndTo) {
        const messages = await this.messageModel.find({$or: [{
            from: new Types.ObjectId(dto.from),
            to: new Types.ObjectId(dto.to)
        },
        {
            from: new Types.ObjectId(dto.to),
            to: new Types.ObjectId(dto.from)
        }]})
        .sort({createdAt:1}).exec();

        return messages;
    }

    async getAllMessagedUsers(user: string) {
        return this.messageModel.aggregate([
            { $match: { $or : [{ to: new Types.ObjectId(user)}, { from: new Types.ObjectId(user)}] } },
            {
                $lookup: {
                    from: "users",
                    localField: "from",
                    foreignField: "_id",
                    as: "fromUser"
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "to",
                    foreignField: "_id",
                    as: "toUser"
                }
            },
            { $group : { _id : "$fromUser", 'messages' : { $push : {message: "$message", from: '$from', to: '$to'}}}}
        ]);

        // return users;
    }
}
