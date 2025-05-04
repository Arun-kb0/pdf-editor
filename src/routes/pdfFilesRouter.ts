import express from 'express';
const router = express.Router();
import { pdfFilesController } from '../DI'

router.get('/', pdfFilesController.getPdfFIles.bind(pdfFilesController))
router.post('/', pdfFilesController.createPdfFile.bind(pdfFilesController))
router.patch('/:pdfFileId', pdfFilesController.updatePdfFile.bind(pdfFilesController))
router.delete('/:pdfFileId', pdfFilesController.deletePdfFile.bind(pdfFilesController))

export default router