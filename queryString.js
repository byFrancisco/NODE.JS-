var http = require('http');
var url = require('url');

//creamos la conexion del servidor

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

console.log('este servidor esta corriendo en  http://localhost:8080/');
//se agrega http://localhost:8080/?year=2017&month=July cuando estemos en la pagina para mostrar el mes y año
