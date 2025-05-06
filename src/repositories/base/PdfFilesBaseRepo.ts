import { Model } from "mongoose";
import IPdfFilesBaseRepo from "../../interface/IPdfFilesBaseRepo";
import { IPdfFileDb, PdfFileModel } from '../../model/pdfFileModel'
import { convertIPdfFileToIPdfFileDb, convertToObjectId } from "../../util/converter";
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

  async findByIdAndUpdate(id: string, data: T): Promise<U | null> {
    try {
      const objId = convertToObjectId(id)
      const updatedFile = await this.PdfFIlesModel.findOneAndUpdate(
        { _id: objId },
        { $set: data as Partial<IPdfFileDb> },
        { new: true }
      )
      return updatedFile as unknown as U
    } catch (error) {
      return handleRepoError(error)
    }
  }

  async findByIdAndDelete(id: string): Promise<U | null> {
    try {
      const objId = convertToObjectId(id)
      const deleted = await this.PdfFIlesModel.findOneAndDelete(
        { _id: objId },
        { new: true }
      )
      return deleted as unknown as U
    } catch (error) {
      return handleRepoError(error)
    }
  }

}

export default PdfFilesBaseRepo;