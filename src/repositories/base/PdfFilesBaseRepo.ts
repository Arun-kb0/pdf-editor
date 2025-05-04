import IPdfFilesBaseRepo from "../../interface/IPdfFilesBaseRepo";
import { PdfFileModel } from '../../model/pdfFileModel'
import { convertIPdfFileToIPdfFileDb } from "../../util/converter";
import handleRepoError from "../../util/handleRepoError";

class PdfFilesBaseRepo<T, U> implements IPdfFilesBaseRepo<T, U> {

  constructor(
    private PdfFIlesModel: any, // Replace with the actual model type
  ) { }

  count(): Promise<number> {
    try {
      const count = this.PdfFIlesModel.countDocuments()
      return count
    } catch (error) {
      return handleRepoError(error)
    }
  }

  findAll(limit: number, startIndex: number): Promise<U[]> {
    throw new Error("Method not implemented.");
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