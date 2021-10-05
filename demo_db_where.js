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

    const adr = 'seoul';
    const sql = "SELECT * FROM customers WHERE address = ?";
    con.query(sql, [adr], function (err, result) {
        if(err) throw err;
        console.log(result);
    });
})