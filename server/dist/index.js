"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// module and types imports
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
// Setup
const app = express_1.default();
dotenv_1.default.config();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    const dbURI = process.env.PRODUCTION_DB_URI;
    mongoose_1.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
        const PORT = parseInt(process.env.PRODUCTION_PORT);
        const HOST = process.env.PRODUCTION_HOST;
        app.listen(PORT, HOST, () => {
            console.log(`App hosted on: ${HOST}:${PORT}`);
        });
    })
        .catch(err => {
        console.log(`Mongodb Atlas Connection Error:  ${err.message}`);
    });
}
else if (process.env.NODE_ENV === 'development') {
    const dbURI = process.env.DEVELOPMENT_DB_URI;
    mongoose_1.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
        const PORT = parseInt(process.env.DEVELOPMENT_PORT);
        const HOST = process.env.DEVELOPMENT_HOST;
        app.listen(PORT, HOST, () => {
            console.log(`App hosted on: ${HOST}:${PORT}`);
        });
    })
        .catch(err => {
        console.log(`Mongodb Atlas Connection Error:  ${err.message}`);
    });
}
else {
    console.log('ENV: ', process.env.NODE_ENV);
}
// Routes Middleware
