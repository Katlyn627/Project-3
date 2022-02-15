const express = require('express')
const app = express()

var path = __dirname + '/views/'

var router = express.Router()

app.use('/', function (req, res) {
    res.sendFile(path + 'index.html')
})