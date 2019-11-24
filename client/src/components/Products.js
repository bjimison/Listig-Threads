import React, { Component } from "react";

import Product from "./Product";

class Products extends Component {

    render() {
        let products = this.props.products.map(product => {
            return <Product
                key={product._id}
                product={product}
                id={product._id}
                name={product.name}
                body={product.body} />;
        });

        return <div className="product-list">{products}</div>;
    }
}

export default Products;