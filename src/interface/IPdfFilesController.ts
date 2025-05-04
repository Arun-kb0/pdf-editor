import { Request, Response, NextFunction } from "express";

interface IPdfFilesController {
  getPdfFIles(req: Request, res: Response, next: NextFunction): Promise<void>
  getPdfFile(req: Request, res: Response, next: NextFunction): Promise<void>
  createPdfFile(req: Request, res: Response, next: NextFunction): Promise<void>
  updatePdfFile(req: Request, res: Response, next: NextFunction): Promise<void>
  deletePdfFile(req: Request, res: Response, next: NextFunction): Promise<void>
}

export default IPdfFilesController