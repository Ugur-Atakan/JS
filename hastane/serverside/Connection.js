const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'lcalhost',
    user:'root',
    password : '12345678',
    database :'db_name',
    port :'25060',// default port is 3306 but in my case it is 25060
    sslmode :'REQUIRED' // default is 'REQUIRED'
});
module.exports = con;