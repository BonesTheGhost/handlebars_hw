const express = require("express");
const router = express.Router();

const orm = require("../config/orm.js");

router.get("/", function (req, res) {
    orm.selectAll(function(error, burgers_table) {
        if (error) {
            return res.status(501).json({
                message: 'ERROR:: Not able to query the database!'
            });
        }
        res.render("index");
    });
});

module.exports = router;