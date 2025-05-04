import IPdfFile from "../interface/IPdfFile";
import IPdfFilesBaseRepo from "../interface/IPdfFilesBaseRepo";
import IPdfFilesRepo from "../interface/IPdfFilesRepo";
import { IPdfFileDb } from "../model/pdfFileModel";
import { convertIPdfFileDbToIPdfFile, convertIPdfFileToIPdfFileDb } from "../util/converter";

class PdfFilesRepo implements IPdfFilesRepo {

  constructor(
    private pdfFileBaseRepo: IPdfFilesBaseRepo<Partial<IPdfFileDb>, IPdfFileDb>
  ) { }

  countPdfFiles(): Promise<number> {
    throw new Error("Method not implemented.");
  }

  findAllPdfFiles(limit: number, startIndex: number): Promise<IPdfFile[]> {
    throw new Error("Method not implemented.");
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