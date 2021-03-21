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
    } else if(/\/api/.test(urlStr)){
        const proxy = createProxyMiddleware('/api', { 
            target: 'https://m.lagou.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
        // console.log(urlStr)
        proxy(req, res)
    }
    else {
        console.log('error')
    }
}) 

server.listen('8080',()=> {
    console.log('localhost:8080')
})

//https://mapi.vip.com/vips-mobile/rest/layout/pc/channel_b/data
//https://m.lagou.com/listmore.json?pageNo=2&pageSize=15