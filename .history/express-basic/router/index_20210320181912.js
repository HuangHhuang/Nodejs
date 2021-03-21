const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
    res.send('hello')
})

router.get('/index', (req, res) => {
    const query = req.query
    res.json(query)
})

router.post('/index', (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
})

router.put('/index', (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
})

router.patch('/index', (req, res) => {
    res.send('patch response')
})

router.delete('/index', (req, res) => {
    res.send('delete response')
})

module.exports = router