const url = require('url')

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

console.log(url.parse(urlString))