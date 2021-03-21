const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

const server = http.createServer((req, res) => {
    let data = ''
    https.get('https://www.meizu.com', (result) => {
        result.on('data', (chunk) => {
            console.log(chunk)
            data += chunk
        })
        result.on('end', () => {
            filterData(data)
        })
    })
}) 

function filterData(data) {
    const $ = cheerio.load(data)
    $('.section-item-box p').each((index, item) => {
        console.log($(item).text())
    })
}

server.listen('8080',()=> {
    console.log('localhost:8080')
})