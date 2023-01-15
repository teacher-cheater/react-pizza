import React from "react";
import ReactPaginate from "react-paginate";

import s from "./Pagination.module.scss";

function Pagination() {
  return (
    <div>
      <ReactPaginate
        className={s.pagination}
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
