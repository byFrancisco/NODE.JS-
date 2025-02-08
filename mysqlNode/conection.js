//realizamos un demo con una conexion para mysql
//ingresamos el user, passsword y host para establecer conexion
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb" // Aquí debe estar vacío si no tienes contraseña
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    
  // Crear la base de datos "mydb"
  //con.query("CREATE DATABASE mydb", function (err, result) {
    //if (err) throw err;
    //console.log("Database created");
  //});
  //creamos una tabla nombrada customers
  /*var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("Table created");
  });*/

 /* var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("Tabla alterada");
  });
  */
 
  /*var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result){
    if (err) throw err;
    console.log("1 dato insertado");
  });
*/

//creamos muultiples datos
/*var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
   ];
   */
   //si agregamos otro dato, el result.affectedRows lo detecta y aumentara el numero
   /*con.query(sql,[values], function (err, result){
    if(err) throw err;
    console.log("Numero de grabaciones insertadas: " + result.affectedRows);
   });
*/
  //cerramos la conexion de datos una vez que el trabajo este terminado
  //para poder hacer y acceder otro codigo y sin tener fallas
  con.end(function(err){
    if(err) throw err;
    console.log("Conexion cerrada");
  });
});
