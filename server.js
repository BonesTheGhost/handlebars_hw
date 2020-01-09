const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./routes/handlers.js");

const PORT = process.env.PORT || 8088;
const app = express();

//This first app.use is to make sure our css works.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Configure Express Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use("/", routes);



app.listen(PORT, () => {
    console.log('Server is starting on PORT:', PORT)
});