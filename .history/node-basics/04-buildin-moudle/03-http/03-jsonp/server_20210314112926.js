const http = require('http')

const server = http.createServer((req, res) => {
    let urlStr = req.url
    switch (urlStr) {
        case '/api/data':
            res.write('console.log("hello")')
            break;
        default:
            res.write('page no found.')
    }
    res.end()
}) 

server.listen('8080',()=> {
    console.log('localhost:8080')
})