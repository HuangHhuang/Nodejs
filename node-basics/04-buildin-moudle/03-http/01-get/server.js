const logger = require('../../utils/log')
// const querystring = require('querystring')

const http = require('http')

const server = http.createServer((request,response) => {
    const url = request.url
    response.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8'
    })
    response.write(`{"x": "${url}"}`)
    response.end()
    // logger.debug(response)
    debugger;
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