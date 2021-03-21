var log4js = require("log4js");


log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
var logger = log4js.getLogger('cheese');
logger.level = "debug";

const url = require('url')

const urlObj = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=3',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path/index.html',
    path: '/path/index.html?id=2',
    href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
  };

  logger.debug(url.format(urlObj));

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

logger.debug(url.parse(urlString))