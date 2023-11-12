import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    database: String(process.env.DB_NAME),
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PW),
    dialect: 'postgres'
});