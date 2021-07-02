import dotenv from 'dotenv';

dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV!;
let PORT: number;
let HOST: string;
let DB_URI: string;
let ENV_ERROR: Error;

switch (NODE_ENV) {
    case 'production':
        PORT = parseInt(process.env.PRODUCTION_PORT!);
        HOST = process.env.PRODUCTION_HOST!;
        DB_URI = process.env.PRODUCTION_DB_URI!;

        break;

    case 'development':
        PORT = parseInt(process.env.DEVELOPMENT_PORT!);
        HOST = process.env.DEVELOPMENT_HOST!;
        DB_URI = process.env.DEVELOPMENT_DB_URI!;

        break;

    default:
        ENV_ERROR = new Error('Invalid Environment!');
}

export { PORT, HOST, DB_URI, ENV_ERROR };
