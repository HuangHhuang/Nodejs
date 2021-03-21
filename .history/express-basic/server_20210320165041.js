const express = require('express')

const app = express()

const middleware = [(req, res, next) => {
    console.log(0)
    next()
}, (req, res, next) => {
    console.log(1)
    next()
}, (req, res, next) => {
    console.log(2)
    next()
}]

app.use('/', middleware)

app.use('/api',(req, res, next) => {
    res.send('hello')
})

app.listen(8080, () => {
    console.log('localhost listening on 8080')
})