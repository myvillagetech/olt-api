import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MODEL_ENUMS } from "src/shared/enums/models.enums";
import { Model } from "mongoose";
import { ICompanyDetailsDocument } from "./schemas/company-detail.schema";

@Injectable()
export class CompanyDetailsService {
  constructor(
    @InjectModel(MODEL_ENUMS.COMPANY_DETAILS)
    private companyDetailsModel: Model<ICompanyDetailsDocument>
  ) {}

  async savePrivacyPolicy(content: string): Promise<any> {
    const privacyPolicy = await this.companyDetailsModel.find({
      name: "PrivacyPolicy",
    })
    privacyPolicy[0].content = content;
    return privacyPolicy[0].save();
  }

  async saveAboutCompany(content: string): Promise<any> {
    const newAboutCompany = await this.companyDetailsModel.find({
      name: "Aboutus",
    });
    newAboutCompany[0].content = content;
    return newAboutCompany[0].save();
  }

  async getPrivacyPolicy(): Promise<any> {
    const privacyPolicy = await this.companyDetailsModel.find({
      name: "PrivacyPolicy",
    })
    return privacyPolicy;
  }

  async getAboutCompany(): Promise<any> {
    const aboutUs = await this.companyDetailsModel.find({
      name: "Aboutus",
    });
    return aboutUs;
  }
}
