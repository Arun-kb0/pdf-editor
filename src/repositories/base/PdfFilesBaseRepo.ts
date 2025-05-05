import { Model } from "mongoose";
import IPdfFilesBaseRepo from "../../interface/IPdfFilesBaseRepo";
import { IPdfFileDb, PdfFileModel } from '../../model/pdfFileModel'
import { convertIPdfFileToIPdfFileDb } from "../../util/converter";
import handleRepoError from "../../util/handleRepoError";

class PdfFilesBaseRepo<T, U> implements IPdfFilesBaseRepo<T, U> {

  constructor(
    private PdfFIlesModel: Model<IPdfFileDb>
  ) { }

  count(): Promise<number> {
    try {
      const count = this.PdfFIlesModel.countDocuments()
      return count
    } catch (error) {
      return handleRepoError(error)
    }
  }

  async findAll(limit: number, startIndex: number): Promise<U[]> {
    try {
      const files = await this.PdfFIlesModel.find()
        .sort({ createdAt: -1 })
        .skip(startIndex)
        .limit(limit)
      return files as unknown as U[]
    } catch (error) {
      return handleRepoError(error)
    }
  }

  findById(): Promise<U | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: T): Promise<U> {
    try {
      const newPdfFile = await PdfFileModel.create(data)
      return newPdfFile as unknown as U;
    } catch (error) {
      return handleRepoError(error)
    }
  }

  findByIdAndUpdate(id: string, data: T): Promise<U | null> {
    throw new Error("Method not implemented.");
  }

  findByIdAndDelete(id: string): Promise<U | null> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesBaseRepo;