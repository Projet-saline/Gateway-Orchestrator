import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

export default new Sequelize(process.env.DB_NAME || 'Saline', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'root', {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'Database',
    port: Number(process.env.DB_PORT) || 3306,
});
