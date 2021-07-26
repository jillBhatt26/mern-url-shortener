// imports
import dotenv from 'dotenv';
import IConfig from './Interfaces/IConfig';

dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV!;

let HOST: string = '';
let PORT: number = -1;
let DB_URI: string = '';
let ENV_ERROR: string = '';

let config: IConfig = {
    ENV: '',
    PORT: -1,
    HOST: '',
    DB_URI: '',
    ENV_ERROR: ''
};

switch (NODE_ENV) {
    case 'production':
        HOST = process.env.PRODUCTION_HOST!;
        PORT = parseInt(process.env.PRODUCTION_PORT!);
        DB_URI = process.env.PRODUCTION_DB_URI!;
        ENV_ERROR = '';

        break;

    case 'development':
        HOST = process.env.DEVELOPMENT_HOST!;
        PORT = parseInt(process.env.PRODUCTION_PORT!);
        DB_URI = process.env.DEVELOPMENT_DB_URI!;
        ENV_ERROR = '';

        break;

    default:
        PORT = -1;
        HOST = '';
        DB_URI = '';
        ENV_ERROR = 'Invalid Environment';
}

if (PORT && HOST && DB_URI) {
    config = {
        ENV: NODE_ENV,
        PORT,
        HOST,
        DB_URI,
        ENV_ERROR
    };
} else if (ENV_ERROR) {
    config = {
        ENV: '',
        PORT,
        HOST,
        DB_URI,
        ENV_ERROR
    };
}

export default config;
