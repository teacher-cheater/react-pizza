import React from "react";
import s from "./Search.module.scss";

import { BsXLg } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

function Search() {
  return (
    <div className={s.content}>
      <div className={s.block}>
        <ImSearch className={s.icon} />
        <input className={s.input} type="text" placeholder="Поиск пиццы..." />
        <BsXLg className={s.clean} />
      </div>
    </div>
  );
}

export default Search;
