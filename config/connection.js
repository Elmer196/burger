var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost", 
        port: 3306,
        database: "burgers_db",
        password: "",
        user: "root",

    })
};

connection.connect(function(err) {
    if(err){
        throw err;
    }
    console.log("Connected!");
});

module.exports = connection;