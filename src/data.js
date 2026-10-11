// src/data.js
import { images } from "./images";

// ====== Catégories ======
export const categories = [
  { id: "pc",        icon: "💻", name: "Ordinateurs / PC" },
  { id: "phone",     icon: "📱", name: "Téléphones" },
  { id: "earphones", icon: "🎧", name: "Écouteurs" },
  { id: "keyboard",  icon: "⌨️", name: "Claviers" },
  { id: "mouse",     icon: "🖱️", name: "Souris" },
  { id: "charger",   icon: "🔌", name: "Chargeurs" },
  { id: "battery",   icon: "🔋", name: "Batteries / Power banks" },
  { id: "camera",    icon: "📷", name: "Appareils photo" },
  { id: "watch",     icon: "⌚", name: "Montres connectées" },
  { id: "console",   icon: "🎮", name: "Consoles de jeux" },
  { id: "speaker",   icon: "🔊", name: "Enceintes" },
];

// ====== Outil : kayzid id + tswira (mn images.js) b automatic ======
let nextId = 1;
const make = (cat, list) =>
  list.map((p, i) => ({
    id: nextId++,
    cat,
    img: images[cat]?.[i] || undefined,
    ...p,
  }));

// ====== Produits : 8 par catégorie, b marka (brand) ======
export const products = [
  ...make("pc", [
    { brand: "HP",      name: "HP 15,6\" 16 Go",                 price: 5490, old: 6490, tag: "-15%" },
    { brand: "Asus",    name: "Asus ROG Strix Gamer RTX 4060",   price: 9990, tag: "Gaming" },
    { brand: "Lenovo",  name: "Lenovo IdeaPad Slim 14\" 8 Go",   price: 4290, old: 4790, tag: "-10%" },
    { brand: "Dell",    name: "Dell Inspiron 17\" Core i7",      price: 7490 },
    { brand: "HP",      name: "HP Pavilion PC de bureau complet", price: 3990 },
    { brand: "Intel",   name: "Intel NUC Mini PC compact",       price: 2790, tag: "Nouveau" },
    { brand: "Acer",    name: "Acer Aspire 14\" Ryzen 5",        price: 4990 },
    { brand: "Apple",   name: "Apple iMac 24\" tout-en-un",      price: 15990 },
  ]),

  ...make("phone", [
    { brand: "Samsung", name: "Samsung Galaxy A35 128 Go",       price: 2990, tag: "Nouveau" },
    { brand: "Samsung", name: "Samsung Galaxy S24 256 Go",       price: 8490 },
    { brand: "Apple",   name: "Apple iPhone 15 Pro 512 Go",      price: 12990 },
    { brand: "Xiaomi",  name: "Xiaomi Redmi 13C 64 Go",          price: 1290 },
    { brand: "Oppo",    name: "Oppo Reno 11 5G 6,7\"",           price: 3490, old: 3990, tag: "-12%" },
    { brand: "Xiaomi",  name: "Xiaomi Poco X6 Pro 12 Go",        price: 3790, tag: "Gaming" },
    { brand: "Samsung", name: "Samsung Galaxy Z Flip pliable",   price: 11990 },
    { brand: "Honor",   name: "Honor X7b 128 Go",                price: 2190 },
  ]),

  ...make("earphones", [
    { brand: "JBL",     name: "JBL Wave Buds sans fil Bluetooth", price: 299, old: 379, tag: "-20%" },
    { brand: "Sony",    name: "Sony WH-CH520 casque Bluetooth",  price: 449 },
    { brand: "Samsung", name: "Samsung écouteurs filaires USB-C", price: 79 },
    { brand: "Logitech",name: "Logitech G435 casque gamer",      price: 349, tag: "Gaming" },
    { brand: "Anker",   name: "Anker Soundcore réduction de bruit", price: 699, tag: "Nouveau" },
    { brand: "Oppo",    name: "Oppo Enco M33 tour de cou sport", price: 159 },
    { brand: "Audio-Technica", name: "Audio-Technica ATH-M40x studio", price: 899 },
    { brand: "Xiaomi",  name: "Xiaomi Redmi Buds mini TWS",      price: 129 },
  ]),

  ...make("keyboard", [
    { brand: "Redragon", name: "Redragon Kumara clavier mécanique RGB", price: 449 },
    { brand: "Logitech", name: "Logitech K580 clavier sans fil slim", price: 199 },
    { brand: "Royal Kludge", name: "Royal Kludge RK61 gamer 60%", price: 379, tag: "Nouveau" },
    { brand: "Logitech", name: "Logitech MK270 pack clavier + souris", price: 229 },
    { brand: "Logitech", name: "Logitech K380 Bluetooth multi-appareils", price: 169 },
    { brand: "HyperX",   name: "HyperX Alloy Origins mécanique TKL", price: 549 },
    { brand: "HP",       name: "HP clavier AZERTY filaire",    price: 89 },
    { brand: "Asus",     name: "Asus clavier rétroéclairé",    price: 249, old: 299, tag: "-17%" },
  ]),

  ...make("mouse", [
    { brand: "Logitech", name: "Logitech G203 souris gamer",   price: 199 },
    { brand: "Logitech", name: "Logitech M220 Silent sans fil", price: 99 },
    { brand: "Logitech", name: "Logitech Lift ergonomique verticale", price: 449 },
    { brand: "Microsoft",name: "Microsoft souris Bluetooth",   price: 129 },
    { brand: "Razer",    name: "Razer DeathAdder RGB gamer",   price: 299, tag: "Gaming" },
    { brand: "HP",       name: "HP souris filaire",            price: 49 },
    { brand: "Razer",    name: "Razer Viper Mini ultra légère", price: 349, tag: "Nouveau" },
    { brand: "SteelSeries", name: "SteelSeries QcK tapis XXL", price: 119 },
  ]),

  ...make("charger", [
    { brand: "Anker",   name: "Anker chargeur rapide 65W USB-C", price: 249 },
    { brand: "Samsung", name: "Samsung chargeur 25W",          price: 119 },
    { brand: "Baseus",  name: "Baseus chargeur voiture 45W",   price: 99 },
    { brand: "Ugreen",  name: "Ugreen GaN 100W 3 ports",       price: 399, tag: "Nouveau" },
    { brand: "Belkin",  name: "Belkin chargeur sans fil 15W",  price: 179 },
    { brand: "Anker",   name: "Anker câble USB-C 2 m",         price: 59 },
    { brand: "Targus",  name: "Targus chargeur PC portable universel", price: 299 },
    { brand: "APC",     name: "APC multiprise USB",            price: 149 },
  ]),

  ...make("battery", [
    { brand: "Anker",   name: "Anker power bank 20 000 mAh",   price: 349, old: 399, tag: "-12%" },
    { brand: "Xiaomi",  name: "Xiaomi power bank 10 000 mAh",  price: 199 },
    { brand: "Baseus",  name: "Baseus power bank 30 000 mAh",  price: 499 },
    { brand: "Anker",   name: "Anker power bank solaire",      price: 249 },
    { brand: "Anker",   name: "Anker MagGo magnétique 5 000 mAh", price: 279, tag: "Nouveau" },
    { brand: "Ugreen",  name: "Ugreen power bank 65W pour PC", price: 599 },
    { brand: "Xiaomi",  name: "Xiaomi mini power bank 5 000 mAh", price: 129 },
    { brand: "Samsung", name: "Samsung batterie externe 22,5W", price: 259 },
  ]),

  ...make("camera", [
    { brand: "Sony",     name: "Sony Cyber-shot appareil numérique", price: 3990 },
    { brand: "Canon",    name: "Canon EOS 250D reflex 24 MP",  price: 6990 },
    { brand: "Sony",     name: "Sony Alpha ZV-E10 hybride 4K", price: 8990 },
    { brand: "GoPro",    name: "GoPro Hero caméra d'action 4K", price: 3490, tag: "Nouveau" },
    { brand: "Fujifilm", name: "Fujifilm Instax Mini instantané", price: 1190 },
    { brand: "Logitech", name: "Logitech C920 webcam Full HD", price: 249 },
    { brand: "Manfrotto",name: "Manfrotto trépied",            price: 149 },
    { brand: "TP-Link",  name: "TP-Link Tapo C200 caméra Wi-Fi", price: 299 },
  ]),

  ...make("watch", [
    { brand: "Samsung", name: "Samsung Galaxy Watch 6 sport",  price: 1990, tag: "Nouveau" },
    { brand: "Xiaomi",  name: "Xiaomi Smart Band 8",           price: 249 },
    { brand: "Garmin",  name: "Garmin Forerunner 55 GPS",      price: 1290 },
    { brand: "Huawei",  name: "Huawei Watch Fit 3 AMOLED",     price: 899 },
    { brand: "Imoo",    name: "Imoo montre enfant avec GPS",   price: 349 },
    { brand: "Amazfit", name: "Amazfit GTS 4 appels Bluetooth", price: 699 },
    { brand: "Amazfit", name: "Amazfit T-Rex robuste outdoor", price: 1190 },
    { brand: "Huawei",  name: "Huawei Band 9 fitness",         price: 179, old: 229, tag: "-22%" },
  ]),

  ...make("console", [
    { brand: "Sony",      name: "Sony PlayStation 5 + manette", price: 5490 },
    { brand: "Nintendo",  name: "Nintendo Switch Lite",         price: 2290 },
    { brand: "Microsoft", name: "Microsoft manette Xbox sans fil", price: 649 },
    { brand: "Sony",      name: "Sony DualSense manette PS5",   price: 699 },
    { brand: "HyperX",    name: "HyperX Cloud II casque gaming", price: 799 },
    { brand: "Microsoft", name: "Microsoft Xbox Series X 4K",   price: 5990, tag: "Nouveau" },
    { brand: "Logitech",  name: "Logitech G29 volant de course", price: 2290 },
    { brand: "SanDisk",   name: "SanDisk microSD 256 Go pour console", price: 299 },
  ]),

  ...make("speaker", [
    { brand: "JBL",     name: "JBL Flip 6 Bluetooth étanche",  price: 1190 },
    { brand: "Xiaomi",  name: "Xiaomi mini enceinte portable", price: 149 },
    { brand: "Samsung", name: "Samsung barre de son",          price: 1890 },
    { brand: "JBL",     name: "JBL PartyBox enceinte de soirée", price: 4490 },
    { brand: "Anker",   name: "Anker Soundcore 3 portable",    price: 449, tag: "Nouveau" },
    { brand: "Google",  name: "Google Nest Mini enceinte intelligente", price: 599 },
    { brand: "Logitech",name: "Logitech Z120 haut-parleurs PC 2.0", price: 199 },
    { brand: "JBL",     name: "JBL Go 3 mini enceinte",        price: 379 },
  ]),
];

// ====== Fonctions partagées ======
export const fmt = (n) => n.toLocaleString("fr-FR") + " DH";
export const catIcon = (id) => categories.find((c) => c.id === id).icon;
export const catName = (id) => categories.find((c) => c.id === id).name;

export function loadCart() {
  try { return JSON.parse(localStorage.getItem("em_cart")) || {}; } catch (e) { return {}; }
}
export function saveCart(c) {
  try { localStorage.setItem("em_cart", JSON.stringify(c)); } catch (e) {}
}
export function toggleTheme() {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("em_theme", t); } catch (e) {}
}

// Kaytsta3mal l'theme l'mchfour mn l'dkhoul
try {
  const t = localStorage.getItem("em_theme");
  if (t) document.documentElement.dataset.theme = t;
} catch (e) {}
