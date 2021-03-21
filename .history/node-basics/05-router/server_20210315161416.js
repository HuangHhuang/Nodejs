const fs = require('fs')

require('http')
    .createServer((req, res) => {
        const urlString = req.url
        switch (urlString) {
            case '/':
                res.end('hello')
                break
            case '/home':
                fs.readFile('./home.html', (err, content) => {
                    res.end(content)
                })
                break
            case '/app.js':
                fs.readFile('./app.js', (err, content) => {
                    res.end(content)
                })
                break
            default:
                res.end('page 404')
        }
    })
    .listen('8080', () => {
        console.log('localhost:8080')
    })