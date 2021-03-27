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
        cb(null, path.join(__dirname + '/../public/uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + new Date().toDateString() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

app.post('/profile/avatar', upload.single('avatar'), (req, res, next) => {
     res.json({ message: 'done' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀🚀 Server listening on: ${PORT}`))