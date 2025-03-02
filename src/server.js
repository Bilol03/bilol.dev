import express from 'express'
import dotenv from 'dotenv'
import { sequelize } from './service/db.js'
dotenv.config()

let app = express()
let PORT = process.env.PORT ?? 8080

import profileRoute  from './routes/profile.route.js'
import blogRoute from "./routes/blog.route.js"

(async () => {
    try {
        app.use(express.json())
        
        await sequelize.authenticate();
        console.log('Database connected successfully!');

        
        app.use(profileRoute)
        app.use(blogRoute)


    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
})();




app.listen(PORT, () => console.log("This server is running on http://localhost:" + PORT))