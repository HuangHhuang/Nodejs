const express = require('express')

const app = express()

app.use('/',(req, res, next) => {
    res.send('hello')
})

app.listen(8080 ,() => {
    console.log('localhost:8080')
})