import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import dotenv from "dotenv";

import { currentUserRouter } from './routes/current-userRoute';
import { signinRouter } from './routes/signinRoute';
import { signoutRouter } from './routes/signoutRoute';
import { signupRouter } from './routes/signupRoute';
import { userRouter } from './routes/userRoute';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

import database from "./config/database";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(userRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

dotenv.config();

database
    .sync()
    .then(() => console.log("Base de données connectée !!"))
    .catch(error => console.log(error));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Gateway listen on port : ${process.env.APP_PORT} !!`);
});