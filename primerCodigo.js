//creamos el requerimiento para el servidor
var http = require('http');
//creamos el server
http.createServer(function(req, res){
    res.writeHead(200,{'Conten-Type': 'text/html'});
    res.end(' aprendiendo un nuevo lenguaje');
    //seleccionamos el numero de puerto 
}).listen(8000);
