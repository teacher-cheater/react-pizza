import React from "react";
import Header from "./components/Header";
import Home from "./components/Pages/HomeBlock/Home";
import Card from "./components/Pages/CardBlock/Card";
import NotFound from "./components/Pages/NotFoundBlock/NotFound";

import {
  Routes,
  Route,
} from "react-router-dom";

import "./scss/app.scss"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
