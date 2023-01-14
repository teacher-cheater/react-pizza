import React from "react";
import s from "./Search.module.scss";

import { BsXLg } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

function Search({ inputValue, setInputValue }) {
  console.log(inputValue);
  return (
    <div className={s.content}>
      <div className={s.block}>
        <ImSearch className={s.icon} />
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className={s.input}
          type="text"
          placeholder="Поиск пиццы..."
        />
        {inputValue && (
          <BsXLg className={s.clean} onClick={() => setInputValue("")} />
        )}
      </div>
    </div>
  );
}

export default Search;
