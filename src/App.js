import { Routes, Route, Navigate } from "react-router-dom";

import Card from "./components/UI/Card";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import "./App.module.css";

function App() {
  return (
    <Card>
      <Routes>
        <Route path="/" element={<Navigate replace to="/menu" />} />
        <Route path="/menu" element={<Header />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Card>
  );
}

export default App;
