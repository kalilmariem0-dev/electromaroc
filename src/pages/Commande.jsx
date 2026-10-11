import { useState } from "react";
import { Link } from "react-router-dom";
import { products, fmt, catIcon } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Perks from "../components/Perks";

export default function Commande({ cart, setCart }) {
  const [pay, setPay] = useState("Paiement à la livraison");
  const [done, setDone] = useState(null); // { title, text } mea ba3d la confirmation

  const ids = Object.keys(cart).filter((id) => products.find((p) => p.id == id));
  const sub = ids.reduce((s, id) => s + products.find((p) => p.id == id).price * cart[id], 0);
  const ship = sub === 0 || sub >= 1000 ? 0 : 30;
  const total = sub + ship;

  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const num = "EM-" + Math.floor(100000 + Math.random() * 900000);
    console.log("Commande", num, Object.fromEntries(f), cart); // ici : envoi vers un serveur / WhatsApp
    setDone({
      title: `Merci ${f.get("prenom")} ! Commande ${num} confirmée`,
      text: `Total : ${fmt(total)} · ${f.get("pay")} · Livraison à ${f.get("ville")} (${f.get("quartier")}). Nous vous appellerons au ${f.get("tel")} pour confirmer.`,
    });
    setCart({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />

      <main className="wrap">
        <h1 className="page-title">Paiement &amp; Livraison</h1>

        {!done && (
          <div className="layout">
            {/* FORMULAIRE */}
            <form className="forms" onSubmit={submit}>
              <section className="card">
                <h3><em>1</em> Vos informations</h3>
                <div className="grid2">
                  <label>Nom<input name="nom" required placeholder="Alami" /></label>
                  <label>Prénom<input name="prenom" required placeholder="Ahmed" /></label>
                  <label>Téléphone<input name="tel" type="tel" required pattern="0[5-7][0-9]{8}" placeholder="06XXXXXXXX" /></label>
                  <label>Email (facultatif)<input name="email" type="email" placeholder="exemple@mail.com" /></label>
                </div>
              </section>

              <section className="card">
                <h3><em>2</em> Adresse de livraison</h3>
                <div className="grid2">
                  <label>Ville
                    <select name="ville" required defaultValue="">
                      <option value="">Choisir…</option>
                      {["Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès", "Oujda", "Kénitra", "Tétouan", "Autre"].map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </label>
                  <label>Quartier<input name="quartier" required placeholder="Ex : Maarif" /></label>
                </div>
                <label>Adresse complète<textarea name="adresse" rows="2" required placeholder="Rue, immeuble, n° d'appartement…" /></label>
                <label>Note pour le livreur (facultatif)<input name="note" placeholder="Ex : appelez avant de venir" /></label>
              </section>

              <section className="card">
                <h3><em>3</em> Mode de paiement</h3>
                <div className="pay">
                  {[
                    ["Paiement à la livraison", "💵", "À la livraison", "Vous payez en cash à la réception"],
                    ["Virement bancaire", "🏦", "Virement bancaire", "Commande expédiée après réception du virement"],
                    ["Carte bancaire", "💳", "Carte bancaire", "Un lien de paiement sécurisé vous sera envoyé"],
                  ].map(([value, icon, title, desc]) => (
                    <label className="opt" key={value}>
                      <input type="radio" name="pay" value={value} checked={pay === value} onChange={() => setPay(value)} />
                      <span>{icon} <b>{title}</b><small>{desc}</small></span>
                    </label>
                  ))}
                </div>
                {pay === "Virement bancaire" && (
                  <div className="rib">
                    <b>Coordonnées bancaires</b><br />
                    Titulaire : ElectroMaroc SARL<br />
                    RIB : 000 000 0000000000000000 00<br />
                    <small>Indiquez votre nom et téléphone dans le motif du virement.</small>
                  </div>
                )}
              </section>

              <button className="btn big" disabled={!ids.length}>Confirmer la commande</button>
            </form>

            {/* RÉCAPITULATIF */}
            <aside className="card summary">
              <h3>Récapitulatif</h3>
              <div>
                {ids.length ? (
                  ids.map((id) => {
                    const p = products.find((x) => x.id == id);
                    return (
                      <div className="row" key={id}>
                        <span>{catIcon(p.cat)} {p.name} × {cart[id]}</span>
                        <b>{fmt(p.price * cart[id])}</b>
                      </div>
                    );
                  })
                ) : (
                  <p className="muted">Votre panier est vide. <Link to="/#produits">Voir les produits</Link></p>
                )}
              </div>
              <div className="row"><span>Sous-total</span><b>{fmt(sub)}</b></div>
              <div className="row"><span>Livraison</span><b>{ship ? fmt(ship) : "Gratuite"}</b></div>
              <small className="muted">Livraison gratuite dès 1 000 DH</small>
              <div className="row total"><span>Total</span><b>{fmt(total)}</b></div>
            </aside>
          </div>
        )}

        {/* CONFIRMATION */}
        {done && (
          <section className="card done">
            <div className="big-emoji">🎉</div>
            <h2>{done.title}</h2>
            <p>{done.text}</p>
            <Link className="btn" to="/">Retour à l'accueil</Link>
          </section>
        )}

        <h2>Comment ça marche ?</h2>
        <section className="steps">
          <div className="step"><b>1️⃣ Choisissez</b>Ajoutez vos produits au panier.</div>
          <div className="step"><b>2️⃣ Remplissez</b>Vos informations et votre adresse.</div>
          <div className="step"><b>3️⃣ Payez</b>À la livraison, par virement ou par carte.</div>
          <div className="step"><b>4️⃣ Recevez</b>Livraison en 24 à 72 h.</div>
        </section>

        <Perks />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
