import { Link } from "react-router-dom";
import { toggleTheme } from "../data";

// Ila 3titi onQuery => kayban search + panier (page d'accueil)
// Ila la => kayban "Continuer mes achats" (page commande)
export default function Header({ query, onQuery, onSearch, cartCount, onCartClick }) {
  const isHome = onQuery !== undefined;
  return (
    <>
      <div className="top">🚚 Livraison partout au Maroc · Paiement à la livraison</div>
      <header>
        <div className="wrap nav">
          <Link className="logo" to="/">
            Electro<span>Maroc</span>
          </Link>

          {isHome && (
            <div className="search">
              <input
                id="search"
                placeholder="Rechercher un produit…"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
              />
              <button id="searchBtn" onClick={onSearch}>🔍</button>
            </div>
          )}

          <div className="icons" style={isHome ? undefined : { marginLeft: "auto" }}>
            {!isHome && <Link className="link" to="/">← Continuer mes achats</Link>}
            <span className="link" onClick={toggleTheme}>🌙 Thème</span>
            {isHome && (
              <span className="link" onClick={onCartClick}>
                🛒 Panier (<span>{cartCount}</span>)
              </span>
            )}
          </div>
        </div>

        <nav className="menu">
          <div className="wrap">
            <Link to="/">🏠 Accueil</Link>
            <Link to="/#cats">Catégories</Link>
            <Link to="/#produits">Produits</Link>
            <Link to="/commande">Paiement &amp; Livraison</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
