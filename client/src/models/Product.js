import axios from 'axios';

class ProductModel {
    static getProducts() {
        let url = "http://localhost:3000/api/products/"
        let request = axios.get(url);

        console.log("City products request: ", request);
        return request;
    }
}

export default ProductModel;