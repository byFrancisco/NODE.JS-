var mysql = require('mysql');

var con =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

/*con.connect(function(err){
    if(err)throw err;
    con.query("SELECT * FROM customers WHERE address LIKE '%S'", function (err,
        result){
            if (err)throw err;
            console.log(result);
        });
*/
//segundo ejemplo
//usamos mysql.scape() para la siguiente funcion
/*con.connect(function(err) {
    if (err) throw err;
    var adr = 'Mountain 21';
    //Escape the address value:
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
*/
//tercer ejemplo
/*
con.connect(function(err){
    if(err) throw err;
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function (err,result){
        if(err)throw err;
        console.log(result);
    });
   */ 
//tercer metodo
con.connect(function(err){
    if(err) throw err;
    var name= 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name= ? OR address = ?';
    con.query(sql, [name,adr], function (err,result){
        if(err)throw err;
        console.log(result);
    });

        con.end(function(err){
            if(err)throw err;
            console.log("conexion cerrada");
        });
    });
