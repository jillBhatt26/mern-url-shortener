// swagger
import swaggerJsDoc from 'swagger-jsdoc';

// interface
import ISwaggerOptions from './Interfaces/ISwaggerOptions';

const options: ISwaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'URL Shortener',
            version: '1.0.0',
            description: 'API to shorten long URLs'
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./src/api/v1/routes/*.ts']
};

const swaggerSpecs = swaggerJsDoc(options);

export default swaggerSpecs;
