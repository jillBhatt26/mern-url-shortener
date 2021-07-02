// module and types imports
import express, { Application } from 'express';

// Setup
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware

// export
export default app;
