const express = require('express')
const app = express()
const port = 9000
const Response = require('./utils/Response.js')

//处理跨域
//配置跨域
const cors = require('cors')
app.use(cors({
    origin: '*'
}))

//配置multer中間件，处理文件上传
const multer = require('multer')
const uuid = require('uuid')
const uploadTools = multer({
    storage: multer.diskStorage({
        // 该存储方案将会把文件直接存入磁盘 
        destination: (req, file, callback) => {
            callback(null,'static')
        },
        filename: (req, file, callback) => {
            //通过file，获取原始文件名
            let name = file.originalname
            //截取源文件的后缀 .jpg .png ...
            let ext = name.substr(name.lastIndexOf('.'))
            //生成一个随机文件名，调用callback返回即可
            let newName=uuid.v4()+ext
            callback(null,newName)
        }
    })
})

//配置static目录为目录为静态资源托管文件夹，这样就可以直接通过http文件名 访问static目录下的资源
app.use(express.static('static'))

app.post('/upload', uploadTools.single('file'), (req, resp) => {
    //uploadTools.array('file') 将会把file字段中传输的文件数据通过uploadTools接收并保存
    let url = "http://localhost:9000/"+req.file.filename
    resp.send(Response.ok(url))
})

app.listen(port, () => {
    console.log('上传文件服务已经启动...')
})