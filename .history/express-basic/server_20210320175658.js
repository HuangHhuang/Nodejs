const express = require('express')
const app = express()

const bodyParser = require('bodyParser')

const router = require('./router/index')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(8080, () => {
    console.log('localhost listening on 8080')
})