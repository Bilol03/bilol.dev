import { getData, writeData } from "../service/service.js"

let getDate = () => {
    const date = new Date(); // Month is zero-based, so 10 = November

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate
}


let getBlogs = (req, res) => {
    let datas = getData('blog')
    res.status(200).json(datas)
}


export {
    getBlogs,

}
