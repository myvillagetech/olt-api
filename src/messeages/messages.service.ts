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
        const messages = await this.messageModel.find({
            $or: [{
                from: new Types.ObjectId(dto.from),
                to: new Types.ObjectId(dto.to)
            },
            {
                from: new Types.ObjectId(dto.to),
                to: new Types.ObjectId(dto.from)
            }]
        })
            .sort({ createdAt: 1 }).exec();

        return messages;
    }

    async getAllMessagedUsers(user: string) {
        const results =  await this.messageModel.aggregate([
            { $match: { $or: [{ to: new Types.ObjectId(user) }, { from: new Types.ObjectId(user) }] } },
            {
                $lookup: {
                    from: "users",
                    localField: "from",
                    foreignField: "_id",
                    as: "fromUser",
                    "pipeline": [
                        { "$project": { "password": 0, "userId": 0 } }
                    ]
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "to",
                    foreignField: "_id",
                    as: "toUser",
                    "pipeline": [
                        { "$project": { "password": 0, "userId": 0 } }
                    ]
                }
            },
            {
                $facet: {
                    from: [{ $group : { _id : "$fromUser"}}],
                    to: [{ $group : { _id : "$toUser"}}],
                }
            },
            // {
            //     $group: {
            //         _id: null,
            //         // from: { $push: "$fromUser" },
            //         to: { $push: "$toUser" },

            //     }
            // },
            // {
            //     $project: {
            //         distictValues: {
            //             $reduce: {
            //                 input: "$tags",
            //                 initialValue: [],
            //                 in: { $setUnion: ["$$value", "$$this"] }
            //             }
            //         }
            //     }
            // }
            // { $group : { _id : "$fromUser", 'messages' : { $push : {message: "$message", from: '$from', to: '$to'}}}},
            // { $group : { _id : "$toUser", 'messages' : { $push : {message: "$message", from: '$from', to: '$to'}}}}
        ]);

        // return results;
        // console.log(results.constructor);
        // return ;

        const from = results[0].from ? results[0].from.map(u => u._id[0]).filter(a => a && a._id.toString() !== user ) : [];
        const to = results[0].to ? results[0].to.map(u => u._id[0]).filter(a => a && a._id.toString() !== user) : [];

        return [...new Map( [...from, ...to].map(item =>
            [item['email'], item])).values()];
        // return {from, to};

        // const result = [];

        
        // let gruoupResults = [...results[0].from, ...results[0].to[0]];
        // // return gruoupResults;
        // // gruoupResults = gruoupResults.map(g => g[0]);
        // gruoupResults = [...new Set(gruoupResults)]
        // return gruoupResults;
    }
}
