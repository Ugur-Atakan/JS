const mysql = require('mysql');
const con = mysql.createConnection({
    host:'192.168.1.42',
    user:'root',
    password:'205630',
    database:'hastane'
});

module.exports = con;
