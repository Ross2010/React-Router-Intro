import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./NavBar";
import "./App.css";

import Home from "./Home";
import Soda from "./Soda";
import Food from "./Food";


function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Soda</Link>
        <Link to="/">Food</Link>
      </nav>
      <Navbar />      
        <Route exact path="/Soda">
          <Soda />
        </Route>
        <Route exact path="/Food">
          <Food />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
