import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { IMiddleware } from './imiddleware.ts';
import { HttpError } from '../exceptions/http-error.ts';

export class PrivateRouteMiddleware implements IMiddleware {
  public async execute({ user }: Request, _res: Response, next: NextFunction): Promise<void> {
    if (! user) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Unauthorized',
        'PrivateRouteMiddleware'
      );
    }

    return next();
  }
}
