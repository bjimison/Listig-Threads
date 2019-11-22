const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost:27017/wayfarer",
    { useNewUrlParser: true }
);

let Product = require("./Product.js");

module.exports = {
    Product: Product
}