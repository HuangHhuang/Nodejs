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
        }
    })
    .listen('8080', () => {
        console.log('localhost:8080')
    })