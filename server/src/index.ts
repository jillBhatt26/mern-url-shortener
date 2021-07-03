// module imports
import express, { Application } from 'express';
import http from 'http';
import config from './config';

// middleware imports
import logger from './api/v1/middleware/Logger';
import SetHeaders from './api/v1/middleware/Headers';
import RequestLogs from './api/v1/middleware/RequestLogs';

// MongoDB Database
import Database from './Database';
import ErrorHandler from './api/v1/middleware/Error';

// init
const app: Application = express();

const NAMESPACE: string = 'SERVER';

// Logger middleware
app.use(RequestLogs);

// Request middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(SetHeaders);

// Routes middleware

// Error Handler middleware
app.use(ErrorHandler);

// Database connection
Promise.resolve(new Database().connection())
    .then(isConnected => {
        if (isConnected === true) {
            const httpServer: http.Server = http.createServer(app);

            const { PORT, HOST } = config;

            httpServer.listen(PORT, HOST, () => {
                logger.info(NAMESPACE, `Server hosted on ${HOST}:${PORT}`);
            });
        }
    })
    .catch(err => {
        console.log('Connection Error: ', err);
    });
