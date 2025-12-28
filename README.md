# Enzo.rc — Site personnel et blog

Site web personnel construit avec Next.js, permettant de partager des articles et du contenu éditorial.

## 🚀 Technologies utilisées

- **Next.js 16** — Framework React avec App Router
- **TypeScript** — Pour un code typé et robuste
- **Tailwind CSS** — Framework CSS utilitaire
- **Markdown** — Pour la rédaction des articles
- **gray-matter** — Parser pour les métadonnées Markdown
- **remark** — Conversion Markdown vers HTML

## 📁 Structure du projet

```
.
├── app/                    # Pages et routes (App Router)
│   ├── layout.tsx         # Layout principal avec Header/Footer
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page "À propos"
│   └── blog/              # Pages du blog
│       ├── page.tsx       # Liste des articles
│       └── [slug]/        # Page article individuel
├── components/            # Composants réutilisables
│   ├── Header.tsx         # En-tête avec navigation
│   ├── Footer.tsx         # Pied de page
│   └── PostCard.tsx       # Carte d'article
├── content/               # Contenu du site
│   └── blog/              # Articles en Markdown
├── lib/                   # Bibliothèques utilitaires
│   └── markdown.ts        # Fonctions pour lire les fichiers .md
├── public/                # Fichiers statiques
│   └── images/            # Images du site
└── Projet.md              # Documentation du projet
```

## 🎨 Design

- **Palette de couleurs** : Bleu (professionnel et sobre)
- **Style** : Moderne, épuré, responsive
- **Typographie** : Inter (Google Fonts)

## 📝 Ajouter un nouvel article

1. Créez un fichier `.md` dans `content/blog/`
2. Ajoutez les métadonnées en haut du fichier :

```markdown
---
title: "Titre de votre article"
date: "2025-12-28"
excerpt: "Courte description de l'article"
coverImage: true
---

# Votre contenu ici

Rédigez votre article en Markdown...
```

3. Le nouvel article apparaîtra automatiquement sur le site

## 🛠️ Commandes

### Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
npm run build
```

### Lancer en production
```bash
npm start
```

## 🌐 Déploiement

Le site est optimisé pour être déployé sur **Vercel** :

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre dépôt Git
3. Vercel détectera automatiquement Next.js
4. Le déploiement se fera en quelques clics

## 📦 Dépendances principales

- `next` — Framework
- `react` & `react-dom` — Bibliothèque UI
- `typescript` — Langage
- `tailwindcss` — Styling
- `gray-matter` — Parser Markdown
- `remark` & `remark-html` — Conversion Markdown
- `date-fns` — Formatage des dates

## 📖 Documentation

Pour plus d'informations sur le projet, consultez `Projet.md`.

## 🎯 Roadmap (évolutions futures)

- [ ] Système de tags pour les articles
- [ ] Recherche d'articles
- [ ] Mode sombre
- [ ] Newsletter
- [ ] Commentaires
- [ ] Système de likes

## 📄 Licence

Ce projet est personnel. Tous droits réservés.

---

**Créé avec ❤️ par Enzo**
