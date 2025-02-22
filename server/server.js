// ************ SERVER JS **********

// Set up Express

const express = require("express");
const app = express();

// Set up Body Parser

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());

// CORS

const cors = require("cors");

app.use(cors());

// Allow Express to access public files

app.use(express.static("public"));

// let db = require("./models");
let controllers = require("./controllers");

// ************* ROUTES ***********

// API Endpoints

app.get("/api/products", controllers.product.showAll);


// ************** SERVER ***********
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

})