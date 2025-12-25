# Tesla Clone – Frontend

A frontend clone of the Tesla website built with **React + Vite**.  
This project focuses on modern UI, reusable components, team collaboration, and proper code review workflow using **Review Board**.

---

## Project Overview

This project replicates key Tesla website pages such as:
- Home
- Learn More
- Shop
- Product Detail

The goal is to practice:
- Component-based architecture
- Team collaboration
- Clean folder structure
- Code review process (Review Board)

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS / Tailwind CSS
- Git & GitHub
- Review Board (RBTools)

---

## Folder Structure

```bash
src/
├── assets/
│   ├── images/
│   │   ├── homepage
│   │   ├── learn-more
│   │   ├── shop
│   │   └── navbar
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│
│   ├── ui/
│   │   ├── heroData.js
│   │   ├── Hero.jsx
│   │   ├── Button.jsx
│   │   ├── NavigationButtons.jsx
│   │   └── SlideIndicator.jsx
│   |
│   ├── common/
│   │   └── Container.jsx
|   |
│   ├── homepage/
│   │   ├── data.js
│   │   ├── HomePromotionsOffers.jsx
│   │   └── HomeShowcaseCard.jsx
│
│   ├── learn-more/
│   │   ├── learnMoreData.js
│   │   ├── ExploreModelY.jsx
│   │   └── ModelYHero.jsx
│
│   ├── shop/
│   │   ├── data/
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── BestSellerCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── LearnMore.jsx
│   └── Shop.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── hooks/
│   └── useScroll.js
│
├── App.jsx
├── main.jsx
└── index.css
```
---

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```