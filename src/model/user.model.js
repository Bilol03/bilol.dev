import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

const User = sequelize.define(
    'users',
    {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        user_role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        about: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        key_skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            defaultValue: new Date(),
            type: DataTypes.DATE
          }

	}
)

export {User}