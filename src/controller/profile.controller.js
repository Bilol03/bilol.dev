import { User } from "../model/user.model.js"
import { where } from "sequelize"
import jwt from "jsonwebtoken"

let LOGIN  = async(req, res, next) => {
    try{
        let data = await User.findOne({where: {username: req.body.username}})
        if(!data) throw new Error("User not found!")
        data = data.dataValues
        let token = jwt.sign({ id: data['id'], reole: data['role'], username: data.username}, process.env.SECRET_KEY)
        res.status(200).json({message: "Success", data, token})
        
    }catch(err){
        res.send(err.message)
    }
}


export {
    LOGIN,
}