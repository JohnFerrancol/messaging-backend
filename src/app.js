import express from 'express';
import cors from 'cors';

import createLocals from './middleware/locals.middleware.js';
import errorHandler from './middleware/errors.middleware.js';

import indexRouter from './routes/index.routes.js';
import apiRouter from './routes/api.routes.js';

const app = express();

// Parse incoming POST request data and JSON objects to be converted into a useable JS object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(createLocals);

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use(errorHandler);

export default app;
