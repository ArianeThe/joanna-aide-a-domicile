# Joanna Dupré - Aide à Domicile

Site vitrine professionnel pour Joanna Dupré, aide à domicile proposant des services d'entretien ménager et d'aide à la personne.

## À propos

Ce site présente les services proposés par Joanna Dupré :
- **Entretien** : Nettoyage complet du logement, rangement, entretien régulier ou ponctuel
- **Aide à la personne** : Accompagnement dans les gestes du quotidien, courses, présence rassurante
- **Bonne humeur** : Un service humain et sincère avec discussions et moments de partage

## Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 7** - Build tool moderne et rapide
- **CSS Vanilla** - Styles personnalisés avec design responsive
- **ESLint** - Linting et qualité du code

## Structure du projet

```
src/
├── assets/
│   ├── icons/              # Icônes des services
│   ├── images/             # Images principales
│   └── react.svg
├── components/             # Composants React
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SectionQui.jsx
│   ├── SectionServices.jsx
│   ├── SectionTarifs.jsx
│   └── SectionContact.jsx
├── styles/
│   └── main.css           # Styles principaux avec media queries
├── App.jsx                # Composant principal
├── index.css              # Styles globaux
└── main.jsx               # Point d'entrée
```

## Installation et développement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/ArianeThe/joanna-aide-a-domicile.git

# Installer les dépendances
npm install
```

### Commandes disponibles

```bash
# Lancer le serveur de développement (port 3000)
npm run dev

# Build de production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

## Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Desktop** : ≥ 1025px - Layout horizontal avec header centré
- **Tablette** : 769px - 1024px - Adaptation progressive
- **Mobile** : ≤ 768px - Layout vertical empilé
- **Petits mobiles** : ≤ 480px - Optimisation pour très petits écrans

## Caractéristiques

- ✅ Design moderne et épuré
- ✅ Navigation fluide par sections
- ✅ Optimisation des images via Vite
- ✅ Accessibilité et SEO-friendly
- ✅ Performance optimale
- ✅ Code maintenable et bien organisé

## Déploiement

Le site est prévu pour être déployé sur **Netlify** avec mise à jour automatique via GitHub.

### Déploiement sur Netlify

1. Connecter le repository GitHub à Netlify
2. Configuration de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Les mises à jour sont automatiques à chaque push sur `main`

## Mises à jour récentes

- Amélioration de l'architecture du projet
- Organisation des assets en sous-dossiers (icons/, images/)
- Optimisation de la responsivité (header centré, media queries améliorées)
- Nettoyage du code (suppression des fichiers CSS inutilisés)
- Simplification des styles globaux

## Auteur

**Joanna Dupré**  
Aide à domicile professionnelle

## Licence

Ce projet est privé et destiné à un usage personnel.

---

Développé avec l'assistance d'Antigravity
