const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
    const urlStr = req.url
    if(/\/api/.test(urlStr)){
        const proxy = createProxyMiddleware('/api')
        console.log(urlStr)
    }else {
        console.log('error')
    }
}) 

server.listen('8080',()=> {
    console.log('localhost:8080')
})