const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'bcd127',
    database:'loja',
    port:'3306'
});

conn.connect();

module.exports = conn ;