import "./App.css";
import NavBarre from "./components/NavBarre";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBarre />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
