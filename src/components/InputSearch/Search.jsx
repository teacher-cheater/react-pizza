import React from "react";
import s from "./Search.module.scss";

import { RiSearchLine } from "react-icons/ri";

function Search() {
  return (
    <div className={s.content}>
      <div className={s.block}>
        <img className={s.icon} src={RiSearchLine} alt="icon" />
        <input className={s.input} type="text" placeholder="Поиск пиццы..." />
      </div>
    </div>
  );
}

export default Search;
