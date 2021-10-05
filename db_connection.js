const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"mission4user",
    password:"mission4pass",
});

//기본 커넥션
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//기본 쿼리문 사용법
/* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});*/