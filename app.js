const express = require('express')

const port = process.env.PORT || 3500
const app = express()

app.set('port', port)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes')(app)

module.exports = app
