const {Pool} = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'rainx',
    host: 'localhost',
    port: '5431',
    database: 'bookmyshow'
});
module.exports = pool;