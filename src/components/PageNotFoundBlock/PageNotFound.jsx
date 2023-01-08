import React from "react";

import s from "./PageNotFound.module.scss";

function NotFoundBlock() {
  return (
    <div className={s.content}>
      <h2 className={s.title}> К сожалению, такой страницы не существует </h2>
    </div>
  );
}

export default NotFoundBlock;
