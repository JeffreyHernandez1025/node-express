var express = require('express')
var app = new express()
var port = 3000
var path = require('path')

app.listen(port, function () {
  console.log('hello from port', port)
})

app.get('/', (req, res) => {
  res.status(401).sendFile(path.join(__dirname + '/component/error.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/component/about.html'))
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/component/home.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/component/contact.html'))
})
