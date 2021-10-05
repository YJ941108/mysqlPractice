const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"mission4user",
    password:"mission4pass",
    database:"mission4"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    const sql = "SELECT name, address FROM customers";
    con.query(sql, function (err, result, fields) {
        if(err) throw err;
        console.log(fields);
    });
})