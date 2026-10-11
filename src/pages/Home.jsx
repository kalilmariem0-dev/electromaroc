import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products, fmt, catIcon, catName } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Perks from "../components/Perks";

export default function Home({ cart, setCart }) {
  const navigate = useNavigate();
  const [currentCat, setCurrentCat] = useState("all");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const timer = useRef();
  const produitsRef = useRef();

  const scrollToProducts = () => produitsRef.current?.scrollIntoView({ behavior: "smooth" });

  function toast(msg) {
    setToastMsg(msg);
    setToastShow(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastShow(false), 1800);
  }

  function pickCat(id) {
    // re-clic sur la même catégorie = tout afficher
    setCurrentCat((c) => (c === id ? "all" : id));
    scrollToProducts();
  }

  function addToCart(id) {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    toast("Produit ajouté au panier ✅");
  }

  function changeQty(id, delta) {
    setCart((c) => {
      const n = (c[id] || 0) + delta;
      const next = { ...c };
      if (n <= 0) delete next[id];
      else next[id] = n;
      return next;
    });
  }

  function order() {
    if (!Object.keys(cart).length) return toast("Le panier est vide");
    navigate("/commande");
  }

  const list = products.filter(
    (p) =>
      (currentCat === "all" || p.cat === currentCat) &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  const cartIds = Object.keys(cart).filter((id) => products.find((p) => p.id == id));
  const cartTotal = cartIds.reduce((s, id) => s + products.find((p) => p.id == id).price * cart[id], 0);
  const cartCount = cartIds.reduce((s, id) => s + cart[id], 0);

  return (
    <>
      <Header
        query={query}
        onQuery={setQuery}
        onSearch={scrollToProducts}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="wrap">
        <section className="hero" id="accueil">
          <h1>Toute la tech, au meilleur prix</h1>
          <p>PC, téléphones, gaming et accessoires : découvrez nos offres de la semaine.</p>
          <button className="btn" onClick={scrollToProducts}>Voir les offres</button>
        </section>

        <h2 id="cats">Catégories</h2>
        <section className="cats">
          {categories.map((c) => (
            <div
              key={c.id}
              className={`cat ${c.id === currentCat ? "active" : ""}`}
              onClick={() => pickCat(c.id)}
            >
              <i>{c.icon}</i>
              {c.name}
            </div>
          ))}
        </section>

        <h2 id="produits" ref={produitsRef}>Produits</h2>
        <section className="prods">
          {list.map((p) => (
            <div className="prod" key={p.id}>
              {p.tag && <span className="tag">{p.tag}</span>}
              <div className="img">
                {p.img ? <img src={p.img} alt={p.name} /> : catIcon(p.cat)}
              </div>
              <small>{catName(p.cat)}</small>
              <b>{p.name}</b>
              <div className="price">
                {fmt(p.price)}
                {p.old && <s>{fmt(p.old)}</s>}
              </div>
              <button className="btn" onClick={() => addToCart(p.id)}>Ajouter au panier</button>
            </div>
          ))}
        </section>
        {list.length === 0 && <p className="empty">Aucun produit trouvé.</p>}

        <Perks />
        <Contact />
      </main>

      <Footer />

      {/* Panier */}
      <aside className={`cart ${cartOpen ? "open" : ""}`}>
        <div className="cart-head">
          <b>🛒 Mon panier</b>
          <button onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div id="cartItems">
          {cartIds.length ? (
            cartIds.map((id) => {
              const p = products.find((x) => x.id == id);
              return (
                <div className="item" key={id}>
                  <span>{catIcon(p.cat)}</span>
                  <span>
                    {p.name}
                    <br />
                    <small>{fmt(p.price)}</small>
                  </span>
                  <button onClick={() => changeQty(id, -1)}>−</button>
                  <span>{cart[id]}</span>
                  <button onClick={() => changeQty(id, 1)}>+</button>
                </div>
              );
            })
          ) : (
            <p className="empty">Votre panier est vide.</p>
          )}
        </div>
        <div className="cart-foot">
          <div className="row"><span>Total</span><b>{fmt(cartTotal)}</b></div>
          <button className="btn" onClick={order}>Commander</button>
        </div>
      </aside>

      <div className={`toast ${toastShow ? "show" : ""}`}>{toastMsg}</div>
    </>
  );
}
