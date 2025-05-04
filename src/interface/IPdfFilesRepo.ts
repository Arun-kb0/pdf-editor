import IPdfFile from "./IPdfFile"

interface IPdfFilesRepo {
  countPdfFiles(): Promise<number>
  findAllPdfFiles(limit: number, startIndex: number): Promise<IPdfFile[]>
  findPdfFIlesById(): Promise<IPdfFile | null>
  createPdfFile(data: Partial<IPdfFile>): Promise<IPdfFile>
  findPdfFileByIdAndUpdate(id: string, data: Partial<IPdfFile>): Promise<IPdfFile | null>
  findPdfFileByIdAndDelete(id: string): Promise<IPdfFile | null>
}

export default IPdfFilesRepo