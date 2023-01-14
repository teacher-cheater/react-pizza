import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Pages/HomeBlock/Home";
import Card from "./components/Pages/CardBlock/Card";
import NotFound from "./components/Pages/NotFoundBlock/NotFound";
import Footer from "./components/Footer/Footer";

import {
  Routes,
  Route,
} from "react-router-dom";

import "./scss/app.scss"

function App() {

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="wrapper">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home inputValue={inputValue} />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
