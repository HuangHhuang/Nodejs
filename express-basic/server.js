const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const router = require('./router/index')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', router)

app.listen(8080, () => {
    console.log('localhost listening on 8080')
})