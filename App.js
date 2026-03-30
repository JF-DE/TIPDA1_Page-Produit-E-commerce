 /* ── BURGER MENU ── */
//  Ici on recupere les elements Buger & menu & Overlay pour creer notre petit menu responsive
 const burger     = document.getElementById('burger');
 const mobileMenu = document.getElementById('mobile-menu');
 const overlay    = document.getElementById('overlay');

 //Conditions ternaire permettant d'ouvrir et de fermer a notre guise le menu contextuel
 burger.addEventListener('click', () => {
     mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
 });
 //Affichage du menue deroulant
 function openMenu()  { mobileMenu.classList.add('open');    overlay.classList.add('active');    burger.classList.add('active'); }
 function closeMenu() { mobileMenu.classList.remove('open'); overlay.classList.remove('active'); burger.classList.remove('active'); }

 /* ── QUANTITE ── */
 //On calcule le nombre d'elemment quel l'utilisateur a selectionner
 const MAX = 10, MIN = 1;
 let quantite = 1;
//On recupere les differents elements html qui y sont affecter
 const inputNombre = document.getElementById('nombre');
 const btnPlus     = document.getElementById('btn-plus');
 const btnMoins    = document.getElementById('btn-moins');
 const maxHint     = document.getElementById('max-hint');

 //Fonction de mise a jour du nombre d'articles
 function updateQuantite(val) {
     quantite = Math.min(MAX, Math.max(MIN, val));
     inputNombre.value = quantite;
     btnPlus.classList.toggle('disabled',  quantite >= MAX);
     btnMoins.classList.toggle('disabled', quantite <= MIN);
     maxHint.classList.toggle('visible',   quantite >= MAX);
 }
//Bouton d'ajut ou de retrait d'article 
 btnPlus.addEventListener('click',  () => updateQuantite(quantite + 1));
 btnMoins.addEventListener('click', () => updateQuantite(quantite - 1));
 updateQuantite(1);

 /* ── PANIER ── */
 //Simulation d'un mini panier de course
 let cartCount = 0;
 const badge       = document.getElementById('cart-badge');
 const badgeMobile = document.getElementById('cart-badge-mobile');
 const toast       = document.getElementById('toast');
 const toastMsg    = document.getElementById('toast-msg');
 let toastTimer;

 //Fonction de creation d'un badge de course pour notifies le nombre d'ardticle l'utilisateur a en stock
 function updateBadge() {
     [badge, badgeMobile].forEach(b => {
         b.textContent = cartCount;
         b.classList.toggle('hidden', cartCount === 0);
         b.classList.remove('bounce');
         void b.offsetWidth;
         b.classList.add('bounce');
     });
 }
//Creation d'une fonction de notifications pour le prevenir de l'ajout des articles
 function showToast(msg) {
     toastMsg.textContent = msg;
     toast.classList.add('show');
     clearTimeout(toastTimer);
     toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
 }
//ici on creer une contraintes pour limiter le nombre d'ajout d'article par utilisateur (Max => 10 Articles)
 document.getElementById('btn-panier').addEventListener('click', () => {
     if (cartCount >= MAX) { showToast('Panier plein ! Maximum 10 articles.'); return; }
     const aAjouter = Math.min(quantite, MAX - cartCount);
     cartCount += aAjouter;
     updateBadge();
     showToast(aAjouter < quantite
         ? `Seulement ${aAjouter} article(s) ajouté(s) — panier plein !`
         : aAjouter === 1 ? '1 article ajouté au panier !' : `${aAjouter} articles ajoutés au panier !`
     );
     updateQuantite(1);
 });