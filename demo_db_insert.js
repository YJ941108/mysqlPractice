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
    const sql = "INSERT INTO customers (name, address) VALUES ('yujeon', 'jeonju')";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("record inserted");
    });
})