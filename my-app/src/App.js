import "./App.css";
import NavBarre from "./components/NavBarre";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarre />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
