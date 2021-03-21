const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
    res.send('hello')
})

router.get('/index', (req, res) => {
    const query = req.query
    res.json(query)
})

router.post('/', (req, res) => {
    const data = req.body
    console.log('data')
})

module.exports = router