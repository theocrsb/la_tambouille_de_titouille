import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app d-flex flex-column min-vh-100">
        <NavbarComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
