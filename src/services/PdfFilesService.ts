import { PaginationPdfFiles, ServiceReturnType } from "../constants/types";
import IPdfFile from "../interface/IPdfFile";
import IPdfFilesRepo from "../interface/IPdfFilesRepo";
import IPdfFilesService from "../interface/IPdfFilesService";
import { handleServiceData } from '../util/handleService'

class PdfFilesService implements IPdfFilesService {

  constructor(
    private pdfFileRepo: IPdfFilesRepo,
    private limit: number
  ) { }

  async getPdfFiles(page: number): ServiceReturnType<PaginationPdfFiles> {
    try {
      const startIndex = (page - 1) * this.limit
      const total = await this.pdfFileRepo.countPdfFiles()
      const numberOfPages = Math.ceil(total / this.limit)
      const pdfFiles = await this.pdfFileRepo.findAllPdfFiles(this.limit, startIndex)
      const paginationData: PaginationPdfFiles = {
        pdfFiles,
        currentPage: page,
        numberOfPages
      }
      return handleServiceData(paginationData)
    } catch (error) {
      throw error
    }
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

  async updatePdfFile(pdfFileId: string, data: Partial<IPdfFile>): ServiceReturnType<IPdfFile | null> {
    try {
      const updatedPdfFile = await this.pdfFileRepo.findPdfFileByIdAndUpdate(pdfFileId, data)
      return handleServiceData(updatedPdfFile)
    } catch (error) {
      throw error
    }
  }

  deletePdfFile(pdfFileId: string): ServiceReturnType<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesService;