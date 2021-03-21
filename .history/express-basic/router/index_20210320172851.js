const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
    res.send('hello')
})

router.get('/index', (req, res) => {
    const query = req.query
    console.log(query)
})

module.exports = router