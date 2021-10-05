const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"mission4user",
    password:"mission4pass",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mission4", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});