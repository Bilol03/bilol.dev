import express from 'express'
import { LOGIN } from '../controller/profile.controller.js'

let route = express.Router()
route.post("/login", LOGIN)



export default route