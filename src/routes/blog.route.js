import express from 'express'
import { getBlogs, postBlogs, updateBlog, deleteBlog, getBlogById } from "../controller/blog.controller.js"
let route = express.Router()

route.get("/blogs", getBlogs)
route.get("/blogs/:id", getBlogById)
route.post("/blogs", postBlogs)
route.put('/blogs/:id', updateBlog)
route.delete("/blogs/:id", deleteBlog)
export default route