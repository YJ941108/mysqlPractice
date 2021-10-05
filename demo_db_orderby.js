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
    const sql = "DELETE FROM customers WHERE address = 'gapodong'";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log("Number of records deleted : " + result.affectedRows);
    });
})