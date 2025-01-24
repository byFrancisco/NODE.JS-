//utilizamos el requerimiento para utilizar http
var http = require('http');

//creamos el server y escribimos que hara
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Rype': 'text/html'});
    res.write(req.url);
    res.end();
    //seleccionamos el puerto del servidor para cumplir con la funcion
}).listen(8000);

//agregamos http://localhost:8080/summer en el link para mostrar summer 

//en caso de no funcionar, agregamos lo siguiente mas el numero de puerto
console.log('el servidor esta corriendo en: http://localhost: /')
