//exportamos myDateTime ya que es necesario para utilizarla
exports.myDateTime = function () {
    return new Date().toLocaleString();
};
//requerimos del servidor
var http =require('http');
//seleccionamos donde estara el codigo
var dt = require('./demo_module');
//creamos el servidor
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write("Los datos y el tiempo son actualmente: " + dt.myDateTime());
    res.end();
    //seleccionamos el puerto disponible
    //es necesario utulizar el listen ya que podemos utilizar el puerto 
}).listen();

console.log('este servidor esta corriendo en  http://localhost:8000/');
