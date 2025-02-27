import express from 'express'
import { getBlogs, postBlogs } from "../controller/blog.controller.js"
let route = express.Router()

route.get("/blogs", getBlogs)
route.post("/blogs", postBlogs)

export default route