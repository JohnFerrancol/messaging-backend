import express from 'express';
import cors from 'cors';

import errorHandler from './middleware/errors.middleware.js';

import authRouter from './routes/auth.routes.js';

const app = express();

// Parse incoming POST request data and JSON objects to be converted into a useable JS object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up CORS for the local React app as well as the deployed Vercel App
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://vercel.com/'],
  })
);

app.use("/api/v1/auth", authRouter)

app.use(errorHandler);

export default app;
