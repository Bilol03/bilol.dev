import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DBNAME, process.env.TNAME, process.env.PASSWD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export { sequelize }
