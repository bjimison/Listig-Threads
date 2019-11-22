const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: String,
    body: String,
    image: String,
})

let Product = mongoose.model("Product", ProductSchema);

module.exports = Product;