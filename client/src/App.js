import React, { Component } from 'react';
import './App.css';

import ProductContainer from "./containers/ProductContainer";

class App extends Component {
  state = {}

  render() {

    return <div>
      <ProductContainer />
    </div>;
  }
}

export default App;
