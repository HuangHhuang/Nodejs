const logger = require('../utils/log')

const querystring = require('querystring')

const query = 'id=2&name=tongyi&from=北京'
const query2 = 'id:2/name:tongyi/from:北京'


//logger.debug(querystring.parse(query))
logger.debug(querystring.escape(query2))