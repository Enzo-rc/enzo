# Enzo.rc — Site personnel ultra-moderne avec animations

🚀 Site web personnel nouvelle génération construit avec les dernières technologies et des animations spectaculaires.

## ✨ Caractéristiques principales

### 🎨 Design & Animations
- **Animations Framer Motion** — Animations fluides et performantes sur tous les éléments
- **Particules animées** — Arrière-plan dynamique avec Canvas API
- **Gradients animés** — Dégradés de couleurs en mouvement
- **Glassmorphism** — Effet verre dépoli moderne
- **Micro-interactions** — Hover effects sophistiqués sur tous les composants
- **Scroll animations** — Animations au défilement (parallax, fade-in, scale)
- **Progress bar** — Barre de progression de lecture en haut de page
- **Scroll to top** — Bouton retour en haut animé
- **Responsive design** — Interface adaptative mobile/tablette/desktop

### 🎭 Composants animés
- `FadeIn` — Apparition en fondu avec direction
- `AnimatedText` — Animation de texte mot par mot
- `ScaleIn` — Agrandissement progressif
- `FloatingElement` — Éléments flottants
- `AnimatedBackground` — Arrière-plan avec particules
- `ScrollProgress` — Barre de progression
- `ScrollToTop` — Bouton retour en haut

### 🛠️ Technologies utilisées

#### Frontend
- **Next.js 16** — Framework React avec App Router
- **TypeScript** — Typage statique
- **Framer Motion** — Animations avancées
- **Tailwind CSS** — Framework CSS utilitaire
- **React Icons** — Bibliothèque d'icônes modernes

#### Contenu
- **Markdown** — Rédaction des articles
- **gray-matter** — Parser de métadonnées
- **remark** — Conversion Markdown vers HTML
- **date-fns** — Formatage des dates en français

## 📁 Structure du projet

```
.
├── app/                           # Pages et routes (App Router)
│   ├── layout.tsx                # Layout principal avec Header/Footer
│   ├── page.tsx                  # Page d'accueil ultra-animée
│   ├── about/                    # Page "À propos" interactive
│   │   └── page.tsx
│   ├── blog/                     # Pages du blog
│   │   ├── page.tsx              # Liste des articles avec animations
│   │   └── [slug]/               # Article individuel
│   │       └── page.tsx
│   └── globals.css               # Styles globaux + animations CSS
│
├── components/                    # Composants réutilisables
│   ├── Header.tsx                # Navigation avec scroll effects
│   ├── Footer.tsx                # Footer animé
│   ├── PostCard.tsx              # Carte d'article avec hover effects
│   ├── ScrollProgress.tsx        # Barre de progression
│   ├── ScrollToTop.tsx           # Bouton retour en haut
│   └── animations/               # Composants d'animation
│       ├── FadeIn.tsx
│       ├── AnimatedText.tsx
│       ├── ScaleIn.tsx
│       ├── FloatingElement.tsx
│       └── AnimatedBackground.tsx
│
├── content/                      # Contenu du site
│   └── blog/                     # Articles en Markdown
│       ├── bienvenue-sur-mon-blog.md
│       ├── debuter-avec-nextjs.md
│       └── importance-responsive-design.md
│
├── lib/                          # Bibliothèques utilitaires
│   └── markdown.ts               # Fonctions pour lire les fichiers .md
│
├── public/                       # Fichiers statiques
│   └── images/                   # Images du site
│
└── Projet.md                     # Documentation du projet
```

## 🎨 Palette de couleurs

Le site utilise un système de couleurs modernes basé sur des gradients :

- **Bleu** : `#3B82F6` → `#2563EB`
- **Violet** : `#9333EA` → `#7C3AED`
- **Rose** : `#EC4899` → `#DB2777`

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

3. Le nouvel article apparaîtra automatiquement avec toutes les animations !

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

### Vérifier les erreurs
```bash
npm run lint
```

## 🌐 Déploiement

Le site est optimisé pour être déployé sur **Vercel** :

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre dépôt GitHub
3. Vercel détectera automatiquement Next.js
4. Le déploiement se fera en quelques clics
5. Chaque push sur GitHub redéploie automatiquement

## ⚡ Performances

Le site est optimisé pour des performances maximales :

- ✅ **Server-Side Rendering (SSR)** pour le SEO
- ✅ **Static Site Generation (SSG)** pour les articles
- ✅ **Code Splitting** automatique
- ✅ **Lazy Loading** des animations
- ✅ **Image Optimization** avec Next.js Image
- ✅ **Font Optimization** avec next/font
- ✅ **Prefetching** automatique des liens

## 🎯 Fonctionnalités d'animation

### Page d'accueil
- Hero section avec gradient animé
- Texte animé mot par mot
- Icônes flottantes
- Particules en arrière-plan
- Indicateur de scroll animé
- Cartes d'articles avec hover effects

### Navigation
- Header transparent qui devient opaque au scroll
- Logo avec gradient animé
- Menu avec micro-animations
- Bouton CTA avec effet de vague

### Pages
- Transitions fluides entre les pages
- Animations au scroll (intersection observer)
- Effets parallax subtils
- Hover effects sur tous les éléments interactifs

## 📦 Dépendances principales

```json
{
  "next": "^16.1.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^11.x",
  "tailwindcss": "^4.x",
  "typescript": "^5.x",
  "gray-matter": "^4.x",
  "remark": "^15.x",
  "remark-html": "^16.x",
  "date-fns": "^4.x",
  "react-icons": "^5.x"
}
```

## 🎓 Accessibilité

Le site respecte les standards d'accessibilité :

- ✅ Sémantique HTML correcte
- ✅ Contraste de couleurs WCAG AA
- ✅ Navigation au clavier
- ✅ Indicateurs de focus visibles
- ✅ Textes alternatifs pour les images
- ✅ Animations respectueuses (prefers-reduced-motion)

## 🔮 Roadmap (évolutions futures)

- [ ] Mode sombre animé
- [ ] Système de tags pour les articles
- [ ] Recherche d'articles avec animations
- [ ] Partage social avec preview cards
- [ ] Newsletter avec popup animé
- [ ] Commentaires avec système de likes
- [ ] Statistiques de lecture
- [ ] PWA (Progressive Web App)

## 📄 Licence

Ce projet est personnel. Tous droits réservés.

---

**Créé avec ❤️ et beaucoup d'animations par Enzo**

🚀 Propulsé par Next.js, Framer Motion et Tailwind CSS

