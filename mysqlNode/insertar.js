//Insertacion de nuevos datos con node.js a mysql
var mysql = require('mysql');

var con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    var sql = "INSERT INTO customers (name, address) values ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result){
        if(err) throw err;
        //Ahora implementamos insertId pora mostrar que id es ahora
        console.log("1  dato insertado, ID:" + result.insertId);
    });

    /* utilizamos el codigo para cerrar la conexion 
    con.end(function(err){
        if(err) throw err;
        console.log("Conexion cerrada");
    */
});