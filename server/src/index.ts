// module imports
import express, { Application } from 'express';
import http from 'http';
import config from './config/Environment';

// middleware imports
import logger from './api/v1/middleware/Logger';
import SetHeaders from './api/v1/middleware/Headers';
import RequestLogs from './api/v1/middleware/RequestLogs';

// routes imports
import shortUrlRoutes from './api/v1/routes/ShortUrlsRoutes';

// swagger imports
import * as swaggerUI from 'swagger-ui-express';

// swagger setup imports
import swaggerSpecs from './config/Swagger';

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

// Database connection
Promise.resolve(new Database().connection())
    .then(isConnected => {
        if (isConnected === true) {
            const httpServer: http.Server = http.createServer(app);

            const { PORT, HOST, ENV } = config;

            httpServer.listen(PORT, HOST, () => {
                logger.info(
                    NAMESPACE,
                    `Server hosted in ENV: "${ENV}", on ${HOST}:${PORT}`
                );
            });
        }
    })
    .catch(err => {
        console.log('Connection Error: ', err);
    });

// Routes middleware
app.use('/', shortUrlRoutes);

// NOTE: Confidential. Only allow to access following URL in development environment
if (config.ENV === 'development') {
    // swagger middleware
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
}

// Error Handler middleware
app.use(ErrorHandler);

export default app;
