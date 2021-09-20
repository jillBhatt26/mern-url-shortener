import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (req: Request, res: Response) => {
    const error: Error = new Error('Not Found');

    return res.status(404).json({ error });
};

export default ErrorHandler;
