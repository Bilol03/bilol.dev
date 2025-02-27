import { Blog } from "../service/blog.service.js"

let getDate = () => {
    const date = new Date(); // Month is zero-based, so 10 = November

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate
}


let getBlogs = async(req, res) => {
    let datas = await Blog.findAll()
    res.status(200).json(await datas)
}

let postBlogs =  async(req, res) => {
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


export {
    getBlogs,
    postBlogs

}
