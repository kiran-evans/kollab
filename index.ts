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
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

import postRouter from './routers/postRouter';
app.use('/post', postRouter);

import commentRouter from './routers/commentRouter';
app.use('/comment', commentRouter);

// Connect to db
import { sequelize } from './pg';
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