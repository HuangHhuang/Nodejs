const http = require('http')
const path = require('path')

http.createServer((req, res) => {
    let urlString = req.url
    let filePathName = path.join(__dirname, './public', urlString)
    console.log(filePathName)

    res.write('hello world')
    res.end()
})
.listen('8080', () => {
    console.log('localhost:8080')
})