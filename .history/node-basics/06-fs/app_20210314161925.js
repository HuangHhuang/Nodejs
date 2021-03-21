const fs = require('fs');

fs.mkdir('./logs', (err) => {
    if (err) throw err
    console.log('文件夹创建成功')
})