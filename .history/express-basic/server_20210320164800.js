const express = require('express')

const app = express()

const middleware = [(req, res, next) => {
    res.send('hello')
    next()
}, (req, res, next) => {
    res.send('hello')
    next()
}, (req, res, next) => {
    res.send('hello')
    next()
}]

app.use('/', (req, res, next) => {
    res.send('hello')
})

app.listen(8080, () => {
    console.log('localhost listening on 8080')
})