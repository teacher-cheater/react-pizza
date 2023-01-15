import React, { useContext } from "react";
import s from "./Search.module.scss";

import { BsXLg } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { SearchValue } from "../../App";

function Search() {
  const { inputValue, setInputValue } = useContext(SearchValue);
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
