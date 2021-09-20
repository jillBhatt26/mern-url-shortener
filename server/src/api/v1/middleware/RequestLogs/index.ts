// imports
import { Request, Response, NextFunction } from 'express';
import logger from '../Logger';

const NAMESPACE: string = 'Server';

const RequestLogs = (req: Request, res: Response, next: NextFunction) => {
    logger.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
        logger.info(
            NAMESPACE,
            `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
        );
    });

    next();
};

export default RequestLogs;
