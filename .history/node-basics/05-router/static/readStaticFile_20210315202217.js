const path = require('path')
const mime = require('mime')
const fs = require('fs')

function myReadFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err){
                resolve('您访问的是一个文件夹，且文件夹里没有index.html')
            }else{
                resolve(data)
            }
        })
    })
}

async function readStaticFile (filePathName) {
    let ext = path.parse(filePathName).ext
    let mimetype = mime.getType(ext)
    let data

    if(fs.existsSync(filePathName)){
        if (ext) {
            data = await myReadFile(filePathName)
        } else {
            data = await myReadFile(path.join(filePathName, './index.html'))
        }
    }else{
        data = 'file not found'
    }
    
    return {
        mimetype,
        data
    }
}

module.exports = readStaticFile