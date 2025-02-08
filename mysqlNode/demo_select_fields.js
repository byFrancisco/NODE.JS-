//select all records fromt the customers table, and display the fields object
//selecionamos todos los datos de customers y lo mostramos en la pantalla

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
  //cerramos la conexion
  con.end(function(err){
    if(err) throw err;
    console.log("Conexion cerrada");
  })
});