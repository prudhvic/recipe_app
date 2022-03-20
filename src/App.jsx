import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
