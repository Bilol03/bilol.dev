import { sequelize } from "./db.js";
import { DataTypes } from "sequelize"

const Blog = sequelize.define('blogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    blogName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blogBody: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
   {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  });
  
sequelize.sync( {alter: false });

export {
    Blog
}
