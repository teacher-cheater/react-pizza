import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//import { useSelector } from "@reduxjs/toolkit";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import MyLoader from "../../components/PizzaBlock/MyLoader";
import Pagination from "../../components/Pagination/Pagination";

import { SearchValue } from "../../App";

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log(categoryId);

  const { inputValue } = useContext(SearchValue);
  const [items, setItems] = useState([]);
  const [isLoadingItems, setIsLoadinfItems] = useState(true);
  //const [categoryId, setCategoryId] = useState(0);
  const [pages, setPages] = useState(1);
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
      `https://63b991f14482143a3f152506.mockapi.io/pizzas?page=${pages}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoadinfItems(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, inputValue, pages]);

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => categoryId(id)}
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
      <Pagination setPages={setPages} />
    </div>
  );
}

export default Home;
