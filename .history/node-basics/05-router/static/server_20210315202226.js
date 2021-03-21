const http = require('http')
const path = require('path')

const readStaticFile = require('./readStaticFile')

http.createServer(async (req, res) => {
    let urlString = req.url
    let filePathName = path.join(__dirname, './public', urlString)
    console.log(filePathName)

    let { mimetype, data } = await readStaticFile(filePathName)
    console.log(data)

    res.write(data.toString())
    res.end()
})
.listen('8080', () => {
    console.log('localhost:8080')
})