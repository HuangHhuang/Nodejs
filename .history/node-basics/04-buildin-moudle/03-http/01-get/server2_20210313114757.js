const logger = require('../../utils/log')
const querystring = require('querystring')

const http = require('http')
const https = require('https')

const server = http.createServer((request,response) => {
    https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', (result) => {
        let data = ''
        result.on('data', (chunk) => {
            data += chunk
        })
        result.on('end', () => {
            response.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8'
            })
            response.write(data)
            response.end()
        })
    })
    
})

server.listen(8080,() => {
    console.log('localhost:8080')
})