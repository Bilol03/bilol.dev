import dotenv from 'dotenv'
import express from 'express'
import { sequelize } from './config/db.js'
dotenv.config()

let app = express()
let PORT = process.env.PORT ?? 8080

import blogRoute from './routes/blog.route.js'
import profileRoute from './routes/profile.route.js'
;(async () => {
	try {
		app.use(express.json())

		await sequelize.authenticate()
		console.log('Database connected successfully!')

		app.use(profileRoute)
		app.use(blogRoute)
	} catch (error) {
		console.error('Error connecting to the database:', error)
	}
})()

app.listen(PORT, () =>
	console.log('This server is running on http://localhost:' + PORT),
)
