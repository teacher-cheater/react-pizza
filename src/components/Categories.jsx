import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => showActiveIndex(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => showActiveIndex(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => showActiveIndex(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => showActiveIndex(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => showActiveIndex(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => showActiveIndex(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
