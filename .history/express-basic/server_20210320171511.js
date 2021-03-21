const express = require('express')
const app = express()

app.use('/',)

app.listen(8080, () => {
    console.log('localhost listening on 8080')
})