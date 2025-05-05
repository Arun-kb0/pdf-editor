import { Request, Response, NextFunction } from "express";
import IPdfFilesController from "../interface/IPdfFilesController";
import IPdfFilesService from "../interface/IPdfFilesService";
import httpStatus from "../constants/httpStatus";
import IPdfFile from "../interface/IPdfFile";
import HttpError from "../util/HttpError";
import { validateResponse } from '../util/validator'

class PdfFilesController implements IPdfFilesController {

  constructor(
    private pdfFilesService: IPdfFilesService
  ) { }

  async getPdfFIles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page } = req.query
      if (!page && isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'Page is required.')
      const svcRes = await this.pdfFilesService.getPdfFiles(Number(page))
      validateResponse(svcRes)
      res.status(httpStatus.OK).json(svcRes.data)
    } catch (error) {
      next(error)
    }
  }

  getPdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async createPdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { file } = req
      console.log(file)
      if (!file) throw new HttpError(httpStatus.BAD_REQUEST, 'invalid file')
      const pdfFileData: Partial<IPdfFile> = {
        name: file.originalname,
        file: {
          data: file.buffer,
          contentType: 'pdf'
        },
      }
      const svcRes = await this.pdfFilesService.createPdfFile(pdfFileData)
      validateResponse(svcRes)
      res.status(httpStatus.OK).json({ newPdfFile: svcRes.data })
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