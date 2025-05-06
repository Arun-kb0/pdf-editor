import express from 'express';
const router = express.Router();
import { pdfFilesController } from '../DI'
import { multerUploadConfig } from '../config/multerConfig'

router.post('/', multerUploadConfig.single('pdf'), pdfFilesController.createPdfFile.bind(pdfFilesController))
router.get('/', pdfFilesController.getPdfFIles.bind(pdfFilesController))
router.patch('/:pdfFileId', multerUploadConfig.single('pdf'), pdfFilesController.updatePdfFile.bind(pdfFilesController))
router.delete('/:pdfFileId', pdfFilesController.deletePdfFile.bind(pdfFilesController))

export default router