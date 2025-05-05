import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectDb from './config/connectDb';
import corsOptions from './config/corsOptions';
import PdfFilesRouter from './routes/pdfFilesRouter'
import errorHandler from './middleware/errorHandler'
import notFoundRoute from './routes/notFoundRoute'
import logger from './middleware/logger'

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || ''

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

app.use(logger)

app.get('/test', (req, res) => {
  res.json('test route')
})

app.use('/', PdfFilesRouter)

app.use('*', notFoundRoute)
app.use(errorHandler)


connectDb(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }).catch((error) => { console.log(error) })