import { ServiceReturnType } from "../constants/types";
import IPdfFile from "../interface/IPdfFile";
import IPdfFilesRepo from "../interface/IPdfFilesRepo";
import IPdfFilesService from "../interface/IPdfFilesService";
import { handleServiceData } from '../util/handleService'

class PdfFilesService implements IPdfFilesService {

  constructor(
    private pdfFileRepo: IPdfFilesRepo
  ) { }

  getPdfFiles(page: number): ServiceReturnType<IPdfFile[]> {
    throw new Error("Method not implemented.");
  }

  getPdfFileById(pdfFileId: string): ServiceReturnType<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  async createPdfFile(data: Partial<IPdfFile>): ServiceReturnType<IPdfFile> {
    try {
      const newFile = await this.pdfFileRepo.createPdfFile(data)
      return handleServiceData(newFile)
    } catch (error) {
      throw error
    }
  }

  updatePdfFile(pdfFileId: string, data: Partial<IPdfFile>): ServiceReturnType<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  deletePdfFile(pdfFileId: string): ServiceReturnType<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesService;