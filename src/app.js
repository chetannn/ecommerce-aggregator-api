const express = require('express')
const logger = require('morgan')

const app = express()
app.use(logger('dev'))
app.use(express.json())

require('./routes')(app)
require('dotenv').config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on: ${PORT}`))