// module and types imports
import express, { Application } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';

// Setup
const app: Application = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let dbURI: string = '';
let PORT: number;
let HOST: string;

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.PRODUCTION_DB_URI!;
    PORT = parseInt(process.env.PRODUCTION_PORT!);
    HOST = process.env.PRODUCTION_HOST!;
}

if (process.env.NODE_ENV === 'development') {
    dbURI = process.env.PRODUCTION_DB_URI!;
    PORT = parseInt(process.env.PRODUCTION_PORT!);
    HOST = process.env.PRODUCTION_HOST!;
}

connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        app.listen(PORT, HOST, () => {
            console.log(`App hosted on: ${HOST}:${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Mongodb Atlas Connection Error:  ${err.message}`);
    });

// Routes Middleware
