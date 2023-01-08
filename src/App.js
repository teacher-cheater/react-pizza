import './App.css';
import "./scss/app.scss"

import Header from "./components/Header";
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { useEffect, useState } from 'react';

const url = 'https://63b991f14482143a3f152506.mockapi.io/pizzas'


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map((pizza, index) => (
                <PizzaBlock
                  key={index} title={pizza.title} imageUrl={pizza.imageUrl} sizes={pizza.sizes} price={pizza.proce} id={pizza.id} types={pizza.types}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
