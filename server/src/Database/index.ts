// imports
import mongoose from 'mongoose';
import config from '../config/Environment';

class Database {
    constructor(private DB_URI: string = config.DB_URI) {}

    conn = (): Promise<boolean> =>
        new Promise(async (resolve, reject) => {
            try {
                await mongoose.connect(this.DB_URI, {
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                    useNewUrlParser: true
                });

                return resolve(true);
            } catch (error) {
                return reject(false);
            }
        });
}

export default Database;
