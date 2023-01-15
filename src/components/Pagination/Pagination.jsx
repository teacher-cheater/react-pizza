import React from "react";
import ReactPaginate from "react-paginate";

import s from "./Pagination.module.scss";

function Pagination({ setPages }) {
  return (
    <div>
      <ReactPaginate
        className={s.pagination}
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => setPages(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
