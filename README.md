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
│ ├── images/
│ ├── icons/
│ ├── videos/
│ └── styles/
│ ├── global.css
│ └── animations.css
│
├── components/
│ ├── layout/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ └── Layout.jsx
│ │
│ ├── home/
│ │ ├── HeroSection.jsx
│ │ ├── ProductSection.jsx
│ │ └── ScrollIndicator.jsx
│ │
│ ├── learnmore/
│ │ └── FeatureCards.jsx
│ │
│ ├── shop/
│ │ ├── ProductCard.jsx
│ │ └── ProductList.jsx
│ │
│ ├── ui/
│ │ ├── Button.jsx
│ │ └── Card.jsx
│ │
│ └── common/
│ └── Container.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── LearnMore.jsx
│ ├── Shop.jsx
│ └── ProductDetail.jsx
│
├── data/
│ ├── vehicles.js
│ └── products.js
│
├── routes/
│ └── AppRoutes.jsx
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