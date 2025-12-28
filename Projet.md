# 📘 projet.md — Vision & cadrage du site

Ce document sert de **référence centrale** pour le projet.
Il est destiné à être utilisé avec **Cursor** afin de garder une vision claire, guider le développement et faciliter le *vibe coding*.

---

## 🎯 Objectif du site

Créer un **site personnel éditorial** destiné à des particuliers afin de :

* me présenter clairement,
* partager du contenu écrit et visuel (articles),
* faire évoluer le site vers un **projet sérieux et extensible**.

Le site doit être :

* simple dans sa première version,
* rapide à mettre en ligne,
* facile à maintenir et à faire évoluer.

---

## 👥 Public cible

* Particuliers
* Lecteurs curieux souhaitant :

  * comprendre qui je suis,
  * accéder à des informations et articles.

---

## 🧩 Version 1 (MVP)

### 🎯 Objectif de la V1

Mettre en ligne rapidement un site :

* clair,
* lisible,
* responsive,
* avec un système de publication d’articles **simple à maintenir**.

### 📄 Pages prévues

* **Accueil**

  * Présentation courte
  * Mise en avant du blog
* **À propos**

  * Présentation plus détaillée
  * Parcours / intentions
* **Blog**

  * Liste des articles
  * Pages d’articles individuelles

---

## ⚙️ Fonctionnalités essentielles (V1)

* Navigation simple (header / menu)
* Lecture confortable des articles
* Intégration d’images
* Site responsive (mobile / desktop)
* **Mise à jour facile du contenu** sans modifier le code principal

### Hors périmètre V1 (prévu plus tard)

* Comptes utilisateurs
* Commentaires
* Paiement
* Fonctionnalités complexes

---

## 📝 Gestion du contenu

* Articles rédigés en **Markdown (.md)**
* Un fichier = un article
* Images stockées localement (dossier `/public` ou équivalent)

Objectif :

> Ajouter un article doit être aussi simple que créer un fichier texte.

---

## 🧪 Stack technique (prévisionnelle)

### Frontend

* **Next.js**
* HTML / CSS / JavaScript
* CSS simple (évolution possible vers Tailwind)

### Contenu

* Markdown pour les articles
* Pas de base de données en V1

### Hébergement

* **Vercel**
* Déploiement continu
* Coût faible (0–5 €/mois)

---

## 🗂️ Structure du projet (indicative)

```
/
├─ app/ ou pages/
├─ components/
├─ content/
│   └─ blog/
│       ├─ article-1.md
│       ├─ article-2.md
│       └─ article-3.md
├─ public/
│   └─ images/
├─ styles/
├─ projet.md
└─ README.md
```

---

## 🔮 Évolutions futures envisagées

* Ajout d’un CMS (Notion, Sanity, etc.)
* Système de commentaires
* Newsletter
* Monétisation
* Base de données

La stack choisie doit permettre ces évolutions **sans refonte complète**.

---

## 🧠 Principes directeurs

* Simplicité avant complexité
* Fonctionnel avant parfait
* Évolutif par design
* Apprentissage progressif

---

## 🤖 Instructions implicites pour Cursor

Quand tu travailles sur ce projet :

* respecter la simplicité de la V1
* privilégier des solutions lisibles et pédagogiques
* commenter le code si nécessaire
* éviter toute sur‑ingénierie

> Toute nouvelle fonctionnalité doit être compatible avec la vision décrite dans ce document.
