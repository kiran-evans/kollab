// App setup and config
import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import dotenv from 'dotenv';
dotenv.config();

// Routes

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