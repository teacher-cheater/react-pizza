import React from "react";

import s from "./Categories.module.scss";

function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Собрать пиццу",
  ];

  return (
    <div className={s.categories}>
      <ul className={s.list}>
        {categories.map((categoryName, index) => (
          <li
            onClick={() => onChangeCategory(index)}
            key={index}
            className={value === index ? s.active : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
