const path = require('path')
const mime = require('mime')
const fs = require('fs')

function myReadFile(file, res) {
    fs.readFile(file, (err, data) => {
        if(err){
            res.end('error.')
        }else{
            return data
        }
    })
}

function readStaticFile (filePathName, res) {
    let ext = path.parse(filePathName).ext
    let mimetype = mime.getType(ext)
    let data

    if(fs.existsSync(filePathName)){
        if (ext) {
            data = myReadFile(filePathName)
        } else {
            data = myReadFile(path.join(filePathName, './index.html'), res)
        }
    }else{
        res.end('file not found')
    }
    
    return {
        mimetype: mimetype,
        data: data
    }
}

module.exports = readStaticFile