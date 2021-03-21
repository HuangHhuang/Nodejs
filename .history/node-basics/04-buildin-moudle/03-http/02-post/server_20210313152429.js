const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
    province: '上海',
    city: '上海',
    district: '宝山区',
    address: '同济支路199号智慧七立方3号楼2-4层',
    latitude: 43.0,
    longitude: 160.0,
    message: '求购一条小鱼',
    contact: '13666666',
    type: 'sell',
    time: 1571217561
})

const options = {
    protocol: 'http',
    hostname: 'localhost',
    method: 'POST',
    port: 3000;
    path: '/data',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'content-Length': Buffer.byteLength(postData)
    }
}

const server = http.createServer((req,res) => {
    const req = http.request(options,(result) => {

    })
    req.write(postData)
    req.end()
})

server.listen(8080, () => {
    console.log('localhost:8080')
})