var mysql = require('mysql');

var con= mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
//borramos un dato usando var y lo conectamos al result para mostrar el resultado
con.connect(function(err){
    if(err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Numero de datos borrados: " + result.affectedRows);
    });
    con.end(function(err){
        if(err)throw err;
        console.log("Conexion terminada");
    });
});