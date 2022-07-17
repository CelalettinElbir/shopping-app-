import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from "react";
import products from "./products.json"
import Product from './components/Product';
import Basket from './components/Basket';
function App() {

  const [money, setMoney] = useState(10000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log(basket, total)

    setTotal(basket.reduce(function (acc, item) {
      return acc + item.price * item.amount;
    }, 0))


  }, [basket, total])






  return (
    <div className="App">
      <Header money={money} total={total} />
      <div className="product-container">

        {
          products.map(item => <Product className="container" item={item} total={total} setTotal={setTotal} basket={basket} money={money} setBasket={setBasket} />)

        }
      </div>

      <Basket basket={basket} total={total} setBasket={setBasket} />

    </div>
  );
}

export default App;
