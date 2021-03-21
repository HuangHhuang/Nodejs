const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
    const urlStr = req.url
    if(/\/vips-mobile/.test(urlStr)){
        const proxy = createProxyMiddleware('/vips-mobile', { 
            target: 'https://mapi.vip.com',
            changeOrigin: true
        })
        // console.log(urlStr)
        proxy(req, res)
    }else {
        console.log('error')
    }
}) 

server.listen('8080',()=> {
    console.log('localhost:8080')
})

//https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5834064