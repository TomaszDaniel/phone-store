import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import products from '../src/products.json';
import ProductsPage from './components/ProductsPage';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';


const Error = () => {
  return (
    <h1 className="error">Strona nie istnieje</h1>
  );
}

class App extends Component {
  state = {
    productList: [],
  }

  handleClick = (products) => {
    const array = this.state.productList
    const secondArray = products.options.filter(item => item.value === null)
    if (secondArray.length === 0) {
      array.push(products)
    } else {
      alert('Nie wybrano wszystkich cech produktu')
    }
    this.setState({
      productList: array
    })
  }

  // handleDelete = () => {
  //   const array = this.state.productList
  //   array.splice(0, 1)
  //   this.setState({
  //     productList: array
  //   })
  // }

  render() {
    return (
      <>
        <BrowserRouter >
          <div>
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink exact to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">Produkty</NavLink>
                  </li>
                  <li>
                    <NavLink className="cart" to="/cart">Koszyk <sup>{this.state.productList.length}</sup></NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/products' render={(props) => <ProductsPage {...props} products={products} click={this.handleClick} />} />
              <Route path='/cart' render={(props) => <Cart {...props} list={this.state.productList} delete={this.handleDelete} />} />
              <Route component={Error} />} />
            </Switch>
            <footer>Stopka</footer>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
