// App setup and config
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import cors, { CorsOptions } from 'cors';
const corsOptions: CorsOptions = {
    allowedHeaders: ['content-type']
}
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

import dotenv from 'dotenv';
dotenv.config();

// Routes

import commentRouter from './routers/commentRouter';
app.use('/api/comment', commentRouter);

import postRouter from './routers/postRouter';
app.use('/api/post', postRouter);

import userRouter from './routers/userRouter';
app.use('/api/user', userRouter);

// Connect to db
import { sequelize } from './lib/pg';
export const initDb = async () => {
    await sequelize.authenticate();
    if (process.env.NODE_ENV !== 'test') console.log(`[server] connected to '${sequelize.getDatabaseName()}'`);
    
    await sequelize.sync();
    if (process.env.NODE_ENV !== 'test') console.log(`[server] all models in '${sequelize.getDatabaseName()}' synchronised successfully`);
};

// Server start
export const server = app.listen(process.env.PORT, async () => {
    await initDb();
    if (process.env.NODE_ENV !== 'test') console.log(`[server] server started on '${process.env.DOMAIN}'`);
});