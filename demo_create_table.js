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
    const sql = "CREATE TABLE prodects (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("Table created");
    });
})