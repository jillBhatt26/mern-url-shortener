// imports
import { connect } from 'mongoose';
import { DB_URI, ENV_ERROR, PORT, HOST } from './Environment';
import app from './App';

class Database {
    connection = () => {
        if (!ENV_ERROR) {
            connect(DB_URI, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
                .then(() => {
                    app.listen(PORT, HOST, () => {
                        console.log(`App hosted on: ${HOST}:${PORT}`);
                    });
                })
                .catch(err => {
                    console.log(
                        `Mongodb Atlas Connection Error:  ${err.message}`
                    );
                });
        } else {
            console.log(`Environment Error: `, ENV_ERROR);
        }
    };
}

export default Database;
