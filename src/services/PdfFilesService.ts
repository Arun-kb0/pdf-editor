import IPdfFile from "../interface/IPdfFile";
import IPdfFilesRepo from "../interface/IPdfFilesRepo";
import IPdfFilesService from "../interface/IPdfFilesService";

class PdfFilesService implements IPdfFilesService {

  constructor(
    private pdfFileRepo: IPdfFilesRepo
  ) { }

  getPdfFiles(page: number): Promise<IPdfFile[]> {
    throw new Error("Method not implemented.");
  }

  getPdfFileById(pdfFileId: string): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  createPdfFile(data: Partial<IPdfFile>): Promise<IPdfFile> {
    try {
      return this.pdfFileRepo.createPdfFile(data)
    } catch (error) {
      throw error
    } 
  }

  updatePdfFile(pdfFileId: string, data: Partial<IPdfFile>): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

  deletePdfFile(pdfFileId: string): Promise<IPdfFile | null> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesService;