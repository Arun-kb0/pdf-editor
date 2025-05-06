import IPdfFile from "./IPdfFile";
import { PaginationPdfFiles, ServiceReturnType } from '../constants/types'

interface IPdfFilesService {
  getPdfFiles(page: number): ServiceReturnType<PaginationPdfFiles>
  getPdfFileById(pdfFileId: string): ServiceReturnType<IPdfFile | null>
  createPdfFile(data: Partial<IPdfFile>): ServiceReturnType<IPdfFile>
  updatePdfFile(pdfFileId: string, data: Partial<IPdfFile>): ServiceReturnType<IPdfFile | null>
  deletePdfFile(pdfFileId: string): ServiceReturnType<IPdfFile | null>
}

export default IPdfFilesService