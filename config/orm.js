//Where we query the database!! CRUD!
const connection = require("./connection");


//cb = callback
const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers_table", function (err, data) {
            if (err) cb(err, null);
            cb(null,data);
        });
    }
};


module.exports = orm;