var express = require('express')
var serveStatic = require('serve-static')

var app = express()
var port = process.env.PORT || 3000
var host = process.env.HOST || 'localhost'
 
app.use(serveStatic(__dirname))

app.listen(3000,  host, function () {
  console.log('App running at http://' + host + ':' + port)
})
