import mongoose, { Schema, Document, Date, Types } from 'mongoose';


export interface IPdfFileDb extends Document {
  _id: Types.ObjectId
  name: string;
  file: {
    data: Buffer;
    contentType: string;
  },
  createdAt: Date
  updatedAt: Date
}

const pdfFileSchema = new Schema<IPdfFileDb>(
  {
    name: { type: String, required: true },
    file: {
      data: { type: Buffer, required: true },
      contentType: { type: String, required: true }
    }
  },
  {
    timestamps: true,
  }
)

export const PdfFileModel = mongoose.model<IPdfFileDb>('PdfFiles', pdfFileSchema, 'pdfFiles')
