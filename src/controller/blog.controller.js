import { where } from "sequelize";
import { Blog } from "../service/blog.service.js"

let getDate = () => {
    const date = new Date(); // Month is zero-based, so 10 = November

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate
}


let getBlogs = async(req, res) => {
    console.log(await Blog);
    
    let datas = await Blog.findAll()
    res.status(200).json(await datas)
}

let postBlogs = async(req, res) => {
    let body = req.body
    console.log(body);
    
    if (!body.blogName) return res.json({message: "Enter the body name!"})
    if (!body.blogBody) return res.json({message: "Enter the body name!"})
    const newUser = await Blog.create({
        blogName: body.blogName,
        blogBody: body.blogBody,
        date: body.date,
        });
    res.status(201).json(await newUser.toJSON())
}

let updateBlog = async(req, res) => {
    let id = req.params.id
    let body = req.body

    let updated = await Blog.update({ blogName: body.blogName }, { where: { id: id } });
    if(updated[0] === 0) return res.status(400).json({status: 400, message: "Not updated!"})
    res.status(201).json({status: 201, message: "Successfully updated!", data: await Blog.findOne({where: {id: id}})})
    
}

let deleteBlog = async (req, res) => {
    let id = +req.params.id
    let deleted = await Blog.destroy({where: {id: id}})
    if(deleted == 0) return res.status(400).json( {status: 204, message: "Blog is already deleted!"} )
    res.status(200).json({status: 200, message: "Successfully deleted!"})
    
}


export {
    getBlogs,
    postBlogs,
    updateBlog,
    deleteBlog

}
