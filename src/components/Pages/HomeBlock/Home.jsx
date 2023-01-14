import React, { useEffect, useState } from "react";

import Categories from "../../Categories/Categories";
import Sort from "../../Sort";
import PizzaBlock from "../../PizzaBlock/PizzaBlock";
import MyLoader from "../../PizzaBlock/MyLoader";

function Home({ inputValue }) {
  const [items, setItems] = useState([]);
  const [isLoadingItems, setIsLoadinfItems] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoadinfItems(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "decs";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = inputValue ? `&search=${inputValue}` : "";

    fetch(
      `https://63b991f14482143a3f152506.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoadinfItems(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
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
