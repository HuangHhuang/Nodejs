const fs = require('fs')

require('http')
    .createServer((req, res) => {
        const urlString = req.url
        switch (urlString) {
            case '/':
                res.end('hello')
                break
        }
    })
    .listen('8080', () => {
        console.log('localhost:8080')
    })