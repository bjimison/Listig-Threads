let db = require("./models");

let productList = [
    {
        name: "Listig Hat",
        body: "this hat is super chill",
        image: "NONE YET",
    },
    {
        name: "Listig Hat #2",
        body: "this hat is super chill also",
        image: "NONE YET",
    },
];

db.Product.deleteMany({}, (err, products) => {
    db.Product.create(productList, (err, products) => {
        if (err) {
            return console.log("ERROR", err);
        }
        console.log("All posts: ", products);
        console.log("Created ", products.length, "products");
        process.exit();
    });
});

// { useUnifiedTopology: true }