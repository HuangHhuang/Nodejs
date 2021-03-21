const fs = require('fs')
const fsPromises = require('fs').promises

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

// fs.readdir('./logs', (err, result) => {
//     if (err) throw err
//     console.log(result)
// })

// fs.writeFile('./logs/log1.log', 'hello\nworld', (err) => {
//     if (err) throw err
//     console.log('done.')
// })

// fs.appendFile('./logs/log1.log', '111', () => {
//     console.log('done.')
// })

// fs.unlink('./logs/log1.log', (err) => {
//     if(err) throw err
//     console.log('done.')
// })

// fs.readFile('./logs/log1.log', 'utf-8', (err, result) => {
//     console.log(result)
// })

// fs.readFile('./logs/log1.log', (err, result) => {
//     console.log(result.toString())
// })

// const content = fs.readFileSync('./logs/log1.log')
// console.log(content.toString())
// console.log('container...')

// ;(async () => {
//     let result = await fsPromises.readFile('./logs/log1.log')
//     console.log(result.toString())
// })()

function readDir(dir){
    fs.readdir('dir', dir, (err, result) => {
        result.forEach((value, item) => {
            let joinDir = `${dir}/${value}`
            fs.stat(joinDir, (err, stats) => {
                if(stats.isDirectory()){
                    readDir(joinDir)
                }else{
                    fs.readFile(joinDir, 'utf-8', (err, content) => {
                        console.log(content)
                    })
                }
            })
        })
    })
}