var express = require('express')
var path = require('path')
var open = require('open')

var PORT =  3000
var app = express()

app.get('/', function(req, res) {
  console.log('app running on port: ', PORT)
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(PORT, function(error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + PORT)
  }
})