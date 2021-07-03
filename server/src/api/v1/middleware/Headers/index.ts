// imports
import { Response, Request, NextFunction } from 'express';

const SetHeaders = (req: Request, res: Response, next: NextFunction) => {
    // allowed origin
    res.header('Access-Control-Allow-Origin', '*');

    // allowed headers
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET POST PUT PATCH DELETE');

        return res.status(200).json({});
    }
};

export default SetHeaders;
