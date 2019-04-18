import { Request, Response, NextFunction } from 'express';

/**
 * Handle all error in middleware, handle via express
 * @param {Error} err 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export default function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
    res.status(500);
    res.json({ msg: 'Error to call endpoint', stack: err.stack });
}