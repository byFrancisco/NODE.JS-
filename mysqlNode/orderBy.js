var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "mydb"
});
//ordenamos por abecedario
//(err, result) es la variable que se pondra en la consola, ya que mostrara el query
//agremariamos un DESC despues de BY name para alterar el orden
con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers ORDER BY name ", function (err, result){
        if (err)throw err;
        console.log(result);
    });
con.end(function(err){
    if (err)throw err;
    console.log("Conexion cerrada");
});
});

