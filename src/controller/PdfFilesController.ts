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

  async updatePdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { file } = req
      const { pdfFileId } = req.params
      console.log('pdfFileId ', pdfFileId)

      if (!file || !pdfFileId) throw new HttpError(httpStatus.BAD_REQUEST, 'file and id are required')
      const pdfFile: Partial<IPdfFile> = {
        file: {
          data: file.buffer,
          contentType: "pdf"
        },
      }
      const svcRes = await this.pdfFilesService.updatePdfFile(pdfFileId, pdfFile)
      validateResponse(svcRes)
      res.status(httpStatus.OK).json({ updatedFile: svcRes.data })
    } catch (error) {
      next(error)
    }
  }

  async deletePdfFile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { pdfFileId } = req.params
      if(typeof pdfFileId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST,'PdfFileId is required')
      const svcRes = await this.pdfFilesService.deletePdfFile(pdfFileId)
      validateResponse(svcRes)
      res.status(httpStatus.OK).json({ deletedFile: svcRes.data })
    } catch (error) {
      next(error)
    }
  }

}

export default PdfFilesController