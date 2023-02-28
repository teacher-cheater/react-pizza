import React, { useState, createContext } from "react";
import Header from "./components/Header";
//import Home from "./Pages/HomeBlock/Home";
import Home from "./Pages/HomeBlock/Home";
import Card from "./Pages/CardBlock/Card";
//import NotFound from "./components/Pages/NotFoundBlock/NotFound";
import Footer from "./components/Footer/Footer";

//import { useSelector, useDispatch } from 'react-redux';
//import { decrement, increment } from './redux/Slices/filterSlice';


import {
  Routes,
  Route,
} from "react-router-dom";

import "./scss/app.scss"

export const SearchValue = createContext();

function App() {
  const [inputValue, setInputValue] = useState('');


  return (
    <div className="wrapper">


      <SearchValue.Provider value={{ inputValue, setInputValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home inputValue={inputValue} />} />
              <Route path="/card" element={<Card />} />
              {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
          </div>
        </div>
        <Footer />
      </SearchValue.Provider >
    </div>
  );
}

export default App;
