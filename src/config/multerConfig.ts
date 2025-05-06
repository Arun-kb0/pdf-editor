import multer, { MulterError } from 'multer'

const SIZE = 10 * 1024 * 1024

export const multerUploadConfig = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: SIZE },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'Only PDFs allowed'))
    }
    cb(null, true)
  }
})