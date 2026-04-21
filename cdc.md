Contexte du projet — Light Foursquare
Tu travailles avec moi, Morel Effobi, développeur solo sur le projet de site web officiel de Light Foursquare. Voici tout ce que tu dois savoir pour m'aider efficacement.

1. Qui est Light Foursquare ?
Light Foursquare est le mouvement de jeunes de l'Église Internationale Foursquare. LIGHT est un acronyme : Living In God's Holy Truth. Le mouvement organise une convention annuelle prévue en août 2025. Le site doit être en ligne avant cet événement.

2. Objectif du site
Le site a deux missions :

Vitrine : présenter le mouvement, ses valeurs, ses actualités et la convention annuelle
E-commerce simplifié : permettre aux visiteurs de commander des goodies (t-shirts, accessoires, etc.) via WhatsApp

Il n'y a pas de paiement en ligne. Le flux de commande se fait via un drawer panier qui génère un message WhatsApp pré-rempli et redirige le visiteur.

3. Stack technique (NON NÉGOCIABLE)

Back-end : Laravel 11
Front-end : React via Inertia.js (monolith — pas d'API REST séparée)
Style : Tailwind CSS
Base de données : MySQL
Auth admin : Laravel Breeze
Icônes : Lucide React
Police : Poppins (Google Fonts)
Hébergement : VPS Hostinger ou LWS
Panier : codé from scratch avec React state, pas de librairie externe
Pas de NestJS, pas de Redux, pas de librairies inutiles


4. Identité visuelle
Logo : soleil doré au-dessus du mot LIGHT avec les 4 couleurs des lettres.
Palette officielle :

Navy (primaire) : #1E2B6E
Or (accent) : #F5A800
Bleu ciel : #2B7BB9
Bordeaux : #8B2020
Fond : #F8F8F8
Blanc : #FFFFFF

Style : fond clair, accents navy et or, cartes arrondies, ombres subtiles, moderne et jeune.

5. Modélisation des données (validée)
users
id, name, email, password, timestamps
products
id, name, slug, description, price (decimal), image, is_available (boolean), timestamps
product_variants
id, product_id (FK), label (ex: "M / Rouge"), stock, price (nullable), timestamps
orders
id, customer_name, customer_phone, whatsapp_message (text), status (enum: pending/contacted/completed), timestamps
order_items
id, order_id (FK), product_id (FK), variant_id (FK nullable), quantity, unit_price, timestamps
news
id, title, slug, content (longtext), image, is_published (boolean), published_at, timestamps
convention
id, title, theme, location, date_start, date_end, description, poster, year, timestamps

6. Pages & Routes
Partie publique

/ → Accueil (Hero ShuffleGrid, convention banner, shop preview, dernières actualités)
/about → À propos du mouvement
/convention → Infos convention (date, lieu, thème, affiche)
/shop → Liste des produits
/shop/{slug} → Détail produit + variantes
/news → Liste des actualités
/news/{slug} → Détail actualité

Pas de page panier séparée. Le panier est un drawer (sidebar) qui s'ouvre depuis la navbar sur toutes les pages. Le formulaire de commande est dans ce drawer.
Flux de commande (drawer)

Visiteur clique "Ajouter au panier"
Le drawer s'ouvre automatiquement
Il voit ses articles, quantités, total
Il entre son nom + téléphone
Clic "Commander via WhatsApp"
Commande sauvegardée en BDD
Redirection wa.me avec message pré-rempli

Partie admin (préfixe /admin)

/admin/login → Connexion
/admin/dashboard → Tableau de bord
/admin/products → Liste produits
/admin/products/create → Créer produit + variantes
/admin/products/{id}/edit → Modifier produit + variantes
/admin/orders → Liste commandes
/admin/orders/{id} → Détail commande
/admin/news → Liste actualités
/admin/news/create → Créer actualité
/admin/news/{id}/edit → Modifier actualité
/admin/convention → Modifier infos convention


7. Plan de développement
Sprint 1 — Mai semaines 1-2 (Fondations)

Installation Laravel 11 + Inertia.js + React + Tailwind
Configuration Breeze
Toutes les migrations
Storage images
Layout public (Navbar + Footer + Drawer panier)
Layout admin (Sidebar + Header)

Sprint 2 — Mai semaines 3-4 (Vitrine)

Page Accueil
Page À propos
Page Convention
Pages Actualités (liste + détail)

Sprint 3 — Juin semaines 1-2 (Boutique & Panier)

Page Boutique
Page Détail produit
Drawer panier from scratch
Formulaire commande dans le drawer
Génération message WhatsApp
Sauvegarde commande en BDD

Sprint 4 — Juin semaines 3-4 (Admin)

Dashboard
CRUD Produits + variantes
CRUD Actualités
Gestion commandes
Gestion convention
Upload images

Sprint 5 — Juillet (Finitions & Déploiement)

Responsive mobile
Optimisation images
SEO de base
Tests complets
Déploiement VPS
Mise en production

Livraison : début août 2025

8. Composant Hero validé (ShuffleGrid)
Pour la section Hero de l'accueil, on utilise le composant ShuffleHero avec une grille 4x4 d'images animées (spring transitions toutes les 3 secondes). Dépendance : framer-motion. Le fichier est placé dans /components/ui/shuffle-grid.tsx.

9. Ce qu'il reste à faire
Au moment où tu reprends ce projet, voici l'état :

✅ Contexte et objectifs définis
✅ Stack technique validée
✅ Modélisation des données validée
✅ Pages et routes définies
✅ Plan de développement établi
✅ Identité visuelle définie
✅ Cahier des charges rédigé
⏳ Code pas encore commencé — on est au Sprint 1


10. Consignes pour travailler avec moi

On travaille étape par étape, sprint par sprint
Tu m'expliques les choix techniques quand c'est important
Si je pose une question hors sujet, ramène-moi au projet
On discute avant de coder si c'est une décision importante
Le code doit être propre, commenté, et respecter les conventions Laravel et React
Toujours penser mobile first pour le front
La deadline est août 2025, on ne peut pas se permettre de tout refaire
