// App setup and config
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
app.use('/', express.static(path.join(__dirname, 'public')));

// Routes

import commentRouter from './routers/commentRouter.ts';
app.use('/api/comment', commentRouter);

import postRouter from './routers/postRouter.ts';
app.use('/api/post', postRouter);

import toolRouter from './routers/toolRouter.ts';
app.use('/api/tool', toolRouter);

import userRouter from './routers/userRouter.ts';
app.use('/api/user', userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html', req.originalUrl));
});

// Connect to db
import { sequelize } from './lib/pg.ts';
(async () => {
    await sequelize.authenticate();
    console.log(`[server] connected to '${sequelize.getDatabaseName()}'`);
    
    await sequelize.sync();
    console.log(`[server] all models in '${sequelize.getDatabaseName()}' synchronised successfully`);    
})();

// Server start
app.listen(process.env.PORT, () => {
  console.log(`[server] server started on '${process.env.DOMAIN}'`);
});