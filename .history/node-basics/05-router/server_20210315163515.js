const fs = require('fs')

require('http')
    // .createServer((req, res) => {
    //     const urlString = req.url
    //     switch (urlString) {
    //         case '/':
    //             res.end('hello')
    //             break
    //         case '/home':
    //             fs.readFile('./home.html', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         case '/app.js':
    //             fs.readFile('./app.js', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         case '/img.jpg':
    //             fs.readFile('./img.jpg', (err, content) => {
    //                 res.end(content)
    //             })
    //             break
    //         default:
    //             res.end('page 404')
    //     }
    // })

    .createServer((req, res) => {
        const urlString = req.url
        const file = fs.readFileSync(`.${urlString}`)
        res.end(file)
    })

    .listen('8080', () => {
        console.log('localhost:8080')
    })