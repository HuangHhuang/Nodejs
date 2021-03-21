const express = require('express')

const router = express.Router()

router.get('/',(req, res) => {
    res.send('hello')
})

// // 获取数据
// router.get('/index', (req, res) => {
//     const query = req.query
//     res.json(query)
// })

// // 添加数据
// router.post('/index', (req, res) => {
//     const data = req.body
//     console.log(data)
//     res.send(data)
// })

// // 修改数据-覆盖式修改
// router.put('/index', (req, res) => {
//     const data = req.body
//     console.log(data)
//     res.send(data)
// })

// // 修改数据-增量修改
// router.patch('/index', (req, res) => {
//     res.send('patch response')
// })

// // 删除数据
// router.delete('/index', (req, res) => {
//     res.send('delete response')
// })

router.all('/index', (req, res) => {
    res.send('all response')
})  

module.exports = router