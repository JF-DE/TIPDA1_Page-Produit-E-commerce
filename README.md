# 🏀 Kmer Hoops — Page Produit

Un projet e-commerce frontend dédié à la vente de chaussures de basketball, réalisé en **HTML**, **CSS** et **JavaScript vanilla**. Ce projet présente une page produit moderne, responsive et interactive.

---

## 📸 Aperçu

> Page produit de la **Nike KD 17 Sunrise** — avec navigation, galerie d'images, sélecteur de quantité et boutons d'achat.

---

## 🗂️ Structure du projet

```
kmer-hoops/
├── index.html         # Structure principale de la page
├── index.css          # Feuille de styles (mise en page + responsive)
├── App.js             # Scripts JavaScript (interactions)
├── icones/            # Icônes de navigation (logo, search, cart, user)
└── images/            # Visuels du produit (topic-1 à topic-7)
```

---

## ⚙️ Fonctionnement de la page

### 🔝 En-tête / Navigation
La barre de navigation contient :
- Un **logo** avec le nom de la boutique *Kmer Hoops*
- Un **menu de navigation** avec les liens : Accueil, Boutique, Produits, À propos
- Une **barre de recherche** avec icône
- Des **icônes** de panier (Cart) et de compte utilisateur (Accounts)

Sur **mobile**, le menu desktop et la barre de recherche sont masqués et remplacés par :
- Un **bouton burger** (☰) qui s'anime en croix (✕) à l'ouverture
- Un **menu déroulant** avec les liens de navigation, la barre de recherche mobile, et les icônes Cart/Accounts
- Un **overlay sombre** qui s'affiche derrière le menu ; cliquer dessus referme automatiquement le menu

### 🖼️ Section gauche — Galerie produit
- Un **visuel principal** du produit affiché en grand (image de fond CSS)
- Une **rangée de 4 miniatures** en bas, permettant de visualiser le produit sous différents angles ou coloris

### 📋 Section droite — Détails produit
Cette section présente toutes les informations relatives au produit :
- **Nom** : KD 17 Sunrise
- **Marque** : Nike Edition
- **Prix** : $137.00
- Une **description** du produit (matière, technologie, confort)
- Un **sélecteur de quantité** avec boutons `+` et `−`
- Deux **boutons d'action** :
  - **Commander** — achat immédiat
  - **Ajouter au panier** — ajout au panier

---

## 📱 Responsive Design

Le site s'adapte à toutes les tailles d'écran :

| Écran | Comportement |
|---|---|
| **Desktop** (> 1024px) | Layout deux colonnes, nav complète, barre de recherche visible |
| **Tablette** (769px – 1024px) | Ajustements d'espacement et de tailles, layout conservé |
| **Mobile** (≤ 768px) | Layout une colonne, menu burger animé, boutons pleine largeur |

---

## 🎨 Choix de design

- **Couleur principale** : `#FF5722` (orange vibrant — énergie du basketball)
- **Fond** : `whitesmoke` (neutre et élégant)
- **Typographies** : Gabriola, Century, Californian FB, Bell MT
- **Animations** : transitions CSS sur les liens, le burger, les boutons et la barre de recherche
- **Ombres & bordures** : utilisées pour donner de la profondeur aux éléments clés

---

## 🚀 Lancer le projet

Aucune installation requise. Il suffit d'ouvrir le fichier dans un navigateur :

```bash
# Cloner le dépôt
git clone https://github.com/ton-username/kmer-hoops.git

# Ouvrir dans le navigateur
cd kmer-hoops
open index.html
```

> ⚠️ Les images produit et les icônes doivent être placées dans les dossiers `images/` et `icones/` pour que la page s'affiche correctement.

---

## 🛠️ Technologies utilisées

- **HTML5** — Structure sémantique de la page
- **CSS3** — Mise en page Grid/Flexbox, animations, media queries
- **JavaScript (Vanilla)** — Gestion du menu burger (ouverture/fermeture, overlay)

---

## 👤 Auteur

Projet réalisé par **[Ton Nom]** dans le cadre d'un apprentissage du développement web frontend.

---

## 📄 Licence

Ce projet est libre d'utilisation à des fins personnelles et éducatives.
