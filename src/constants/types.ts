import httpStatus from "./httpStatus"
import IPdfFile from '../interface/IPdfFile'

export type ValidatorResponseType = {
  data: any | undefined
  error: string | undefined
  statusCode: httpStatus | undefined
}

export type ServiceReturnNoPromiseType<T> = {
  data: T | undefined
  error: string | undefined
  statusCode: httpStatus | undefined
}

export type ServiceReturnType<T> = Promise<{
  data: T | undefined
  error: string | undefined
  statusCode: httpStatus | undefined
}>

export type ResponseType = {
  data: any | undefined
  error: string | undefined
  statusCode: httpStatus | undefined
}


export type PaginationPdfFiles = {
  pdfFiles: IPdfFile[]
  currentPage: number
  numberOfPages: number
}
