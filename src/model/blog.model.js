import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

const Blog = sequelize.define(
	'blogs',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {        
				model: 'users',
				key: 'id'
       		}
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
			allowNull: false,
		},
	},
	{
		timestamps: true,
	},
)

sequelize.sync({ alter: false })

export { Blog }
