import { Date as MongoDate, Schema, Types } from "mongoose";
import IPdfFile from "../interface/IPdfFile";
import { IPdfFileDb } from "../model/pdfFileModel";


export const stringToDate = (str: string): MongoDate => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}


export const convertIPdfFileDbToIPdfFile = (pdfFile: IPdfFileDb): IPdfFile => {
  return {
    _id: pdfFile._id.toString(),
    name: pdfFile.name,
    file: {
      data: pdfFile.file.data,
      contentType: pdfFile.file.contentType
    },
    createdAt: pdfFile.createdAt.toString(),
    updatedAt: pdfFile.updatedAt.toString()
  }
}

export const convertIPdfFileToIPdfFileDb = (pdfFile: Partial<IPdfFile>): IPdfFileDb => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }
  const pdfFileDb: Partial<IPdfFileDb> = {}
  Object.keys(pdfFile).forEach((key) => {
    const typedKey = key as keyof IPdfFile;
    if (pdfFile[typedKey] && conversionMap[typedKey]) {
      pdfFileDb[typedKey] = conversionMap[typedKey](pdfFile[typedKey])
    } else if (pdfFile[typedKey]) {
      pdfFileDb[typedKey as keyof IPdfFile] = pdfFile[typedKey] as any;
    }
  })

  return pdfFileDb as IPdfFileDb
}