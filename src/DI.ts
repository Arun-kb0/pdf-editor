import { IPdfFileDb, PdfFileModel } from './model/pdfFileModel'
import PdfFilesBaseRepo from './repositories/base/PdfFilesBaseRepo'
import PdfFilesRepo from './repositories/PdfFilesRepo'
import PdfFilesService from './services/PdfFilesService'
import PdfFilesController from './controller/PdfFilesController'



const pdfFilesBaseRepo = new PdfFilesBaseRepo<Partial<IPdfFileDb>, IPdfFileDb>(PdfFileModel)
const pdfFilesRepo = new PdfFilesRepo(pdfFilesBaseRepo)
const pdfFIlesService = new PdfFilesService(pdfFilesRepo)
export const pdfFilesController = new PdfFilesController(pdfFIlesService)

