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
    const sql = "SELECT users.name AS user, prodects.name AS favorite FROM users RIGHT JOIN prodects ON users.favorite_product = prodects.id";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log(result);
    });
})