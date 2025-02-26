import fs from 'fs'
import path from  "path"

let getData = (filename) => {
    let datas = fs.readFileSync(path.join(process.cwd(), "src", "database", filename + ".json"), 'utf-8')
    return datas ? JSON.parse(datas) : []
}

let writeData = (filename, datas) => {
    fs.writeFileSync(`./src/database/${filename}.json`, JSON.stringify(datas, null, 4), "utf-8")
    return true
}

export {
    getData, 
    writeData,

}