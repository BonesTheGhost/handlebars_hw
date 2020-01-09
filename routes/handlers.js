const express = require("express");
const router = express.Router();

const orm = require("../config/orm.js");

router.get("/", function (req, res) {
    orm.selectAll(function(error, burgers) {
        if (error) {
            return res.status(501).json({
                message: 'ERROR:: Not able to query the database!'
            });
        }

        console.log("Burgers: ", burgers)
        res.render("index", {burgers, style: "index"});
    });
});


router.post('/add', (req, res) => {

    const burgerName = req.body.burger_name;

    orm.insertOne(burgerName, function(error, burger) {
        if(error) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }

        return res.json({
            burger_name: burgerName,
            id: burger.insertId,
            is_favorite: 0
        });
    });

});

module.exports = router;