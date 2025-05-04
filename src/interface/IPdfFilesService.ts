import IPdfFile from "./IPdfFile";

interface IPdfFilesService {
  getPdfFiles(page: number): Promise<IPdfFile[]>
  getPdfFileById(pdfFileId: string): Promise<IPdfFile | null>
  createPdfFile(data: Partial<IPdfFile>): Promise<IPdfFile>
  updatePdfFile(pdfFileId: string, data: Partial<IPdfFile>): Promise<IPdfFile | null>
  deletePdfFile(pdfFileId: string): Promise<IPdfFile | null>
}

export default IPdfFilesService