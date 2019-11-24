import React, { Component } from "react";

class Product extends Component {

    render() {

        return <div><h1>{this.props.product.title}</h1></div>
    }
}

export default Product;

