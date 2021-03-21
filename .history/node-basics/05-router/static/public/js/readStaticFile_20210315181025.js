const path = require('path')
const mime = require('mime')
const fs = require('fs')

function readStaticFile (filePathName) {
    let ext = path.parse(filePathName)
    console.log(ext)
}