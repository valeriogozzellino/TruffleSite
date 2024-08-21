import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booked from "./pages/Booked";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { LanguageProvider } from "./hook/LanguagesContext";
function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
