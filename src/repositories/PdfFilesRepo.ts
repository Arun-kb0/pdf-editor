import IPdfFile from "../interface/IPdfFile";
import IPdfFilesBaseRepo from "../interface/IPdfFilesBaseRepo";
import IPdfFilesRepo from "../interface/IPdfFilesRepo";
import { IPdfFileDb } from "../model/pdfFileModel";
import { convertIPdfFileDbToIPdfFile, convertIPdfFileToIPdfFileDb } from "../util/converter";

class PdfFilesRepo implements IPdfFilesRepo {

  constructor(
    private pdfFileBaseRepo: IPdfFilesBaseRepo<Partial<IPdfFileDb>, IPdfFileDb>
  ) { }

  async countPdfFiles(): Promise<number> {
    try {
      const count = await this.pdfFileBaseRepo.count()
      return count
    } catch (error) {
      throw error
    }
  }

  async findAllPdfFiles(limit: number, startIndex: number): Promise<IPdfFile[]> {
    try {
      const files = await this.pdfFileBaseRepo.findAll(limit, startIndex)
      return files.map(item => convertIPdfFileDbToIPdfFile(item))
    } catch (error) {
      throw error
    }
  }

  findPdfFIlesById(): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  async createPdfFile(data: Partial<IPdfFile>): Promise<IPdfFile> {
    try {
      const convertedData = convertIPdfFileToIPdfFileDb(data)
      const newPdfFile = await this.pdfFileBaseRepo.create(convertedData)
      return convertIPdfFileDbToIPdfFile(newPdfFile)
    } catch (error) {
      throw error
    }
  }

  findPdfFileByIdAndUpdate(id: string, data: Partial<IPdfFile>): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  findPdfFileByIdAndDelete(id: string): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesRepo;