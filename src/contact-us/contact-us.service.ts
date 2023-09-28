import { HttpException, HttpStatus, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateContactUsDto } from './create-contact-us.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/models.enums';
import { Model } from 'mongoose';
import { IContactUsDocument } from './contact-us.schema';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectModel(MODEL_ENUMS.CONTACT_US) private  contacUsModel : Model<IContactUsDocument>,
) {}

async createContactUs(contactUsPayload : CreateContactUsDto) : Promise<CreateContactUsDto | UnprocessableEntityException>{
    const contactUs = new this.contacUsModel(contactUsPayload);
    return await contactUs.save();
}

async getAllContactUs(): Promise<CreateContactUsDto[]> {    
    const contactUsDetails = await this.contacUsModel.find({});
    
    return contactUsDetails;
}

async deleteContactUs(contactUsId : string) : Promise < IContactUsDocument | NotFoundException | UnprocessableEntityException > {
    const contactUs = await this.contacUsModel.deleteOne({ _id : contactUsId}).exec();
    if(!contactUs){
        throw new NotFoundException(`Contatus #${contactUsId} not found`)
    }
    return ;
}

async updateCountactUs(contactUsPayload : CreateContactUsDto, contactUsId : string) : Promise<CreateContactUsDto | UnprocessableEntityException>{
    const contactUs = await this.contacUsModel.findByIdAndUpdate(contactUsId,{isActive :contactUsPayload.isActive},  { new: true }).exec()
    if (!contactUs) {
        throw new HttpException(`Information With #${contactUsId} not found`, HttpStatus.NOT_MODIFIED);
    }
    return contactUs;
}

}
