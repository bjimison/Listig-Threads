import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Products from "../components/Products";

import ProductModel from "../models/Product";

class ProductContainer extends Component {
    state = {
        productList: [],
    };

    // Fetches posts for a specific city
    fetchProducts = () => {
        ProductModel.getProducts()
            .then(response => {
                this.setState({ productList: response.data });
            })
            .catch(error => {
                console.log("in get products error, ", error);
            });
    };

    render() {
        console.log("product list:", this.state.productList);

        return <div className="product-container">
            <section className="product-list-header">
            </section>
            <Products
                products={this.state.productList}
            />
        </div>
    }
}

export default ProductContainer;