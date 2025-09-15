
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./Location";
import NotFound from "./NotFound"; 
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
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;