import express from 'express'
import { getBlogs } from "../controller/blog.controller.js"
let route = express.Router()

route.get("/blogs", getBlogs)

export default route