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
    
    // logger.debug(response)
    // debugger;
    // let data = ''
    // request.on('data',(chunk) => {
    //     data += chunk
    // })
    // request.on('end',() => {
    //     response.writeHead(200,{
    //         'content-type':'application/json;charset=utf-8'
    //     })
    //     // logger.debug(data)
    //     response.write(JSON.stringify(querystring.parse(data)))
    //     response.end()
    // })
    
})

server.listen(8080,() => {
    console.log('localhost:8080')
})