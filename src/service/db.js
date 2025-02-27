import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: "postgres",
  database: 'blog',
  user: 'bilol',
  password: '2003',
  host: 'localhost',
  port: 5432,
});


export {sequelize}