// imports
import mongoose from 'mongoose';
import config from '../config/Environment';

class Database {
    constructor(private DB_URI: string = config.DB_URI) {}

    connection = async (): Promise<boolean | Error> => {
        let isConnected: boolean = false;

        const connection: boolean | Error = await mongoose
            .connect(this.DB_URI, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useNewUrlParser: true
            })
            .then(() => {
                isConnected = true;
                return isConnected;
            })
            .catch(err => {
                console.log('Mongodb Connection Error: ', err.message);

                const error: Error = new Error(err.message);

                return error;
            });

        return connection;
    };
}

export default Database;
