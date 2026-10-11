import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { loadCart, saveCart } from "./data";
import Home from "./pages/Home";
import Commande from "./pages/Commande";

// Scroll l #produits, #cats... mn menu
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState(loadCart); // { idProduit: quantité }

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/commande" element={<Commande cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}
