var http = require('http');
//Uso común para el módulo Sistema de Archivos:
//Read files, create files, delete files, update files, rename files
var fs = require('fs');
http.createServer(function (req,res){
    //llamamos fs.readfile para buscar  el codigo de etiquetas
    fs.readFile('primer.html', function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
----------------------------------------
  //USAMOS .HTML para conectarlo al node.js
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usando node.js</title>
</head>
<body>
    <!--enlazamos el codigo con demoReadFile.js-->
    <h1>Usamos node.js para conectarlo al server</h1>
    <p>Practicando con node.js</p>
</body>
</html>
