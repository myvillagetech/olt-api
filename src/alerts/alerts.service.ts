import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Model } from 'mongoose';
import { IAlertDocument } from './schema/alert.schema';

@Injectable()
export class AlertsService {
  constructor(
    @InjectModel(MODEL_ENUMS.ALERT)
    private alertModel: Model<IAlertDocument>
  ) { }


  async createAlert(alertDetails: CreateAlertDto): Promise<any>{
    let newAlert = new this.alertModel(alertDetails);
    return await newAlert.save();
  }
  
  async getAllAlertsByUserId(userId: string): Promise<any>{
    let alerts = await this.alertModel.find({user: userId});
    let totalCount = await this.alertModel.countDocuments({
      user: userId
    });
    let unreadCount = await this.alertModel.countDocuments({
      user: userId,
      isRead: false
    });

    return {
      alerts,
      totalCount,
      unreadCount
    }
  }

  async deleteAlert(alertId: string): Promise<any>{
    let alert = await this.alertModel.findByIdAndDelete(alertId);
    return alert
  }

  async deleteAlluserAlerts(userId: string): Promise<any>{
    return await this.alertModel.deleteMany({ user: userId }).exec();
  }

  async markAlertAsRead(userId: string): Promise<any>{
    await this.alertModel.updateMany({ user: userId, isRead: false }, { $set: { isRead: true } }).exec();
  }


}
