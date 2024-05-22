import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./Location";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="location/:id" element={<Location />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
};

export default App;
