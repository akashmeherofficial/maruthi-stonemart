import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import ProductDesc from "./components/ProductDecs/ProductDesc";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDesc />} />
      </Routes>
    </div>
  );
}

export default App;
