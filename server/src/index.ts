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

if (process.env.NODE_ENV === 'production') {
    const dbURI: string = process.env.PRODUCTION_DB_URI!;

    connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
            const PORT: number = parseInt(process.env.PRODUCTION_PORT!);
            const HOST: string = process.env.PRODUCTION_HOST!;

            app.listen(PORT, HOST, () => {
                console.log(`App hosted on: ${HOST}:${PORT}`);
            });
        })
        .catch(err => {
            console.log(`Mongodb Atlas Connection Error:  ${err.message}`);
        });
} else if (process.env.NODE_ENV === 'development') {
    const dbURI: string = process.env.DEVELOPMENT_DB_URI!;

    connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
            const PORT: number = parseInt(process.env.DEVELOPMENT_PORT!);
            const HOST: string = process.env.DEVELOPMENT_HOST!;

            app.listen(PORT, HOST, () => {
                console.log(`App hosted on: ${HOST}:${PORT}`);
            });
        })
        .catch(err => {
            console.log(`Mongodb Atlas Connection Error:  ${err.message}`);
        });
} else {
    console.log('ENV: ', process.env.NODE_ENV);
}

// Routes Middleware
