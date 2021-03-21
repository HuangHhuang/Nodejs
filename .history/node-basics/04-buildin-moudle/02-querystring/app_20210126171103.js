const logger = require('../utils/log')

const querystring = require('querystring')

const query = 'id=2&name=tongyi&from=北京'
const query2 = 'id:2/name:tongyi/from:北京'
const queryEscape = 'id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC'



//logger.debug(querystring.parse(query))
//logger.debug(querystring.escape(query))
logger.debug(querystring.unescape(queryEscape))