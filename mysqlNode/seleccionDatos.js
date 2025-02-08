//Mostramos todos los datos de MySQL con node.JS
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"mydb"
});
con.connect(function(err){
    if(err) throw err;
    //para mostrar todo cmabiamos las palabras a 
    // SELECT * FROM customers
    con.query("SELECT name,address FROM customers", function (err,result, fielfd){
        if (err)throw err;
        //para mostrar solo uno llamamos al console
        //console.log(result[2].address)
        console.log(result);
    });
    con.end(function(err){
        if(err) throw err;
        console.log("Conexion cerrada");
      });
});