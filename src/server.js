import express from 'express'
import dotenv from 'dotenv'


dotenv.config()

let app = express()
let PORT = process.env.PORT ?? 8080

import profileRoute  from './route/profile.route.js'
import blogRoute from "./route/blog.route.js"

app.use(profileRoute)
app.use(blogRoute)


app.listen(PORT, () => console.log("This server is running on http://localhost:" + PORT))