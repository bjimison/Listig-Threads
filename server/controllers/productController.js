let db = require("../models");

// GET api/products
const getAllProducts = (req, res) => {
    db.Product.find({}, (err, products) => {
        if (err) {
            console.log(err)
            return err;
        };
        res.json(products);
    })
}

module.exports = {
    showAll: getAllProducts
}