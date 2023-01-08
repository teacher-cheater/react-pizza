import React from "react";
import { Link } from "react-router-dom";

import NotFoundBlock from "../../PageNotFoundBlock/PageNotFound";

import s from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={s.content}>
      <NotFoundBlock />
      <Link to="/" className={s.button}>
        На главную
      </Link>
    </div>
  );
}

export default NotFound;
