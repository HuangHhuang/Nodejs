const fs = require('fs');

// fs.mkdir('./logs', (err) => {
//     if (err) throw err
//     console.log('文件夹创建成功')
// })

// fs.rename('./logs', './log', () => {
//     console.log('文件夹重命名成功')
// })

// fs.rmdir('./log', () => {
//     console.log('文件夹删除成功')
// })

fs.readdir('./logs', (err, result) => {
    if (err) throw err
    console.log(result)
})