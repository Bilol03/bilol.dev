import express from 'express'
import { GetProfile } from '../controller/profile.controller.js'

let route = express.Router()
route.get("/profile", GetProfile)



export default route