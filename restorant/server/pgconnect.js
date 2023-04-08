const { Client } = require('pg');
const pgcon = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'restorant',
    password: '205630',
    port: 5432,
  })

module.exports = pgcon;