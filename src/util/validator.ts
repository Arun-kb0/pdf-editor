import httpStatus from '../constants/httpStatus'
import { ValidatorResponseType } from '../constants/types'
import HttpError from '../util/HttpError'

export const validateResponse = (res: ValidatorResponseType) => {
  if (!res || !res.data) {
    throw new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'No response')
  }
  if (res.error && res.statusCode) {
    throw new HttpError(res.statusCode, res.error)
  }
  if (res.error) {
    throw new HttpError(httpStatus.INTERNAL_SERVER_ERROR, res.error)
  }
}
