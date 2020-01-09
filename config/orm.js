//Where we query the database!! CRUD!
const connection = require("./connection");


//cb = callback
const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers_table", function (err, data) {
            if (err) cb(err, null);
            cb(null,data);
        });
    },

    insertOne: function(burgerName, cb) {
        const sqlQuery = `INSERT INTO burgers_table(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function(err, data){
            if(err) cb(err, null);
            cb(null, data);
        });
    }
};


module.exports = orm;