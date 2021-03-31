import express from 'express'
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(logger('dev'))
app.use('/uploads', express.static(path.join(__dirname + '/../public/uploads')))
app.use(express.json())
app.use(cors())

require('./routes')(app)
require('dotenv').config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀🚀 Server listening on: ${PORT}`))