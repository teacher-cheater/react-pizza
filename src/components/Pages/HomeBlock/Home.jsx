import React, { useEffect, useState } from "react";

import Categories from "../../Categories";
import Sort from "../../Sort";
import PizzaBlock from "../../PizzaBlock/PizzaBlock";
import MyLoader from "../../PizzaBlock/MyLoader";

const url = "https://63b991f14482143a3f152506.mockapi.io/pizzas";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoadingItems, setIsLoadinfItems] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoadinfItems(false);
      });
  }, []);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadingItems
          ? [...new Array(12)].map((_, index) => <MyLoader key={index} />)
          : items.map((object, index) => (
              <PizzaBlock key={index} {...object} />
            ))}
      </div>
    </div>
  );
}

export default Home;
