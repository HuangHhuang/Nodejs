const path = require('path')
const mime = require('mime')
const fs = require('fs')

function readStaticFile (filePathName) {
    let ext = path.parse(filePathName)
    let mimetype = mime.getType(ext.ext)

    if(fs.existsSync(filePathName)){
        console.log('ok')
    }else{
        console.log('file not found')
    }
    
    return 'hello'
}

module.exports = readStaticFile