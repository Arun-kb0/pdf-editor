import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectDb from './config/connectDb';
import corsOptions from './config/corsOptions';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || ''

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDb(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }).catch((error) => { console.log(error) })