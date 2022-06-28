var http = require('http')
var log = require('./log.js')
var text = require('./exportstring.js')
var sayFunc = require('./exportfunc.js')
    // http modülü
http.createServer(function(request, response) {

    console.log(response.url)
    if (request.url == '/admin') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write("<html><body><strong>Admin Sayfasi </strong></body></html> ")
    } else if (request.url == '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write("<html><body><strong>AnaSayfa </strong></body></html> ")
    } else if (request.url == '/customer') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ name: 'mustafa', lastname: 'kemal' }))
    }
    //response.end('hello world');
}).listen(8080)
log.information('sunucu yayına gecti')
console.log(text)
console.log(sayFunc())