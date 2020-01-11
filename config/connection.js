const mysql = require('mysql');
const connection;

//OLD CONNECTION THAT WORKS LOCALLY
/*
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'titanus2242',
    database: 'burgers_db'
});
*/

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'titanus2242',
        database: 'burgers_db'
    })
}


connection.connect();
module.exports = connection;