import express, { NextFunction, Request, Response } from 'express'
import HttpError from '../util/HttpError'
import httpStatus from '../constants/httpStatus'

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError(httpStatus.NOT_FOUND, 'route not found')
  next(error)
}

export default notFoundRoute
