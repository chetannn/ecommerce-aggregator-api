const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const app = express()

app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(cors())

require('./routes')(app)
require('dotenv').config()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.filename + '-' + Date().now() + path.extname(file.originalname))
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀🚀 Server listening on: ${PORT}`))