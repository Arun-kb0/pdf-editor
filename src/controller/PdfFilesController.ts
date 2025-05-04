import { Request, Response, NextFunction } from "express";
import IPdfFilesController from "../interface/IPdfFilesController";
import IPdfFilesService from "../interface/IPdfFilesService";
import httpStatus from "../constants/httpStatus";

class PdfFilesController implements IPdfFilesController {

  constructor(
    private pdfFilesService: IPdfFilesService
  ) { }

  getPdfFIles(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getPdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async createPdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // ! check here
      const { file } = req.body
      const newPdfFile = await this.pdfFilesService.createPdfFile(file)
      res.status(httpStatus.OK).json({ newPdfFile })
    } catch (error) {
      next(error)
    }
  }

  updatePdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

  deletePdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export default PdfFilesController