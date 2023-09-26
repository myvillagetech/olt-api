import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateFaqDto, faqSearchByCrieriaDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FaqDocument } from './schema/faq.schema';
import { Model } from 'mongoose';

@Injectable()
export class FaqService {

  constructor(
    @InjectModel('Faq') private faqModel: Model<FaqDocument>
  ) { }

  async createFaq(createFaqDto: CreateFaqDto): Promise<FaqDocument> {
    const newFaq = await new this.faqModel(createFaqDto);
    return newFaq.save();
  }

  async updateFaq(updateFaqDto: UpdateFaqDto, faqId: string): Promise<FaqDocument> {
    const updatedFaq = await this.faqModel.findByIdAndUpdate(faqId, updateFaqDto, { new: true })
    return updatedFaq
  }

  async deleteFaq(faqId: string): Promise<FaqDocument> {
    const deletedFaq = await this.faqModel.findByIdAndDelete(faqId)
    return deletedFaq;
  }

  async getFaqById(faqId: string): Promise<FaqDocument> {
    const faq = await this.faqModel.findById(faqId);
    if (!faq) {
      throw new HttpException(`Faq with this ${faqId} not found`, HttpStatus.BAD_REQUEST);
    }
    return faq;
  }

  async faqSearchByCrieria(criteria: faqSearchByCrieriaDto) {
    let result;

    try {
      const search = {
        $and: []
      }

      if (criteria.category && criteria.category.length > 0) {
        search.$and.push({
          category: { $in: criteria.category }
        })
      }

      if (criteria.searchTerm) {
        search.$and.push({
          $or:[
            { question: { $regex: criteria.searchTerm, $options: 'i' } },
            { answer: { $regex: criteria.searchTerm, $options: 'i' } },
          ]
        })
      }

      let paginationProps: any = [
        { $match: search.$and.length > 0 ? search : {} },
      ];
      if (
        (criteria.pageSize || criteria.pageSize > 0) &&
        (criteria.pageNumber || criteria.pageNumber === 0)
      ) {
        paginationProps.push({
          $skip: criteria.pageNumber * criteria.pageSize,
        });
        paginationProps.push({ $limit: criteria.pageSize });
      }

      let sortObject;
      if (criteria.sortField) {
        sortObject = {};
        sortObject[criteria.sortField] = criteria.sortOrder;
        paginationProps.push({ $sort: sortObject });
      }

      result = await this.faqModel.aggregate([
        { $match: search.$and.length > 0 ? search : {} },
        {
          $facet : {
            faqs: paginationProps,
            metrics: [
              { $match: search.$and.length > 0 ? search : {} },
              { $count: "totalCount" },
            ],
          }
        }
      ])
    }catch (error) {
      console.log(error);
    }

    return result;
  }
}
