import express from 'express'
import { getBlogs, postBlogs, updateBlog, deleteBlog } from "../controller/blog.controller.js"
let route = express.Router()

route.get("/blogs", getBlogs)
route.post("/blogs", postBlogs)
route.put('/blogs/:id', updateBlog)
route.delete("/blogs/:id", deleteBlog)
export default route