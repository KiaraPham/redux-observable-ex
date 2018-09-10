import React, {Component} from 'react';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div>
        <ProductList/>
        <Cart/>
      </div>
    );
  }
}

export default App;
