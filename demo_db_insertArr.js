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
    const sql = "INSERT INTO prodects (id, name) VALUES ?";
    const values = [
        ['154', 'Chocolate Heaven'],
        ['155', 'Tasty Lemons'],
        ['156', 'Vanilla Dreams']
    ];
    con.query(sql, [values], function (err, result) {
        if(err) throw err;
        console.log(result);
    });
})