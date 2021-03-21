const http = require('http')
const path = require('path')

const readStaticFile = require('./readStaticFile')

http.createServer((req, res) => {
    let urlString = req.url
    let filePathName = path.join(__dirname, './public', urlString)
    console.log(filePathName)

    let { mimetype, data } = readStaticFile(filePathName, res)
    console.log(data)

    res.write('hello')
    res.end()
})
.listen('8080', () => {
    console.log('localhost:8080')
})