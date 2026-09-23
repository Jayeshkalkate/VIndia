# 🇮🇳 VIndia – Vehicles of India

🚗 A vehicle discovery platform for exploring cars, bikes, tractors, commercial and luxury
vehicles across India — with filtering, side‑by‑side comparison, specs, prices and brand
directories, all in one place.

🔗 **Live Site:** [vehicles-of-india-vindia.netlify.app](https://vehicles-of-india-vindia.netlify.app)

---

## 📌 Project Overview

**VIndia** is a front-end vehicle showcase platform built with HTML5, CSS3, Bootstrap 5 and
vanilla JavaScript. It lets users browse 350+ models from 42+ brands across five categories —
Passenger, Two Wheeler, Commercial, Tractor & Farm Equipment, and Luxury & Premium — and drill
into full specifications, compare any two models, or search by name.

The project doubles as a UI/UX case study: it's built around a shared dark design system, chunked
information density (spec grids + accordions instead of walls of text), sticky/adaptive layouts,
and motion that responds to real interaction rather than decoration for its own sake.

---

## 🧩 Features

- ✅ **Global design system** — dark theme, Poppins/Inter type, glassmorphism sticky navbar with
  a mobile slide-in menu, gradient buttons with ripple feedback, reveal-on-scroll animation
- ✅ **Smart search** — debounced live suggestions from the homepage search bar
- ✅ **Cascading filters** — Type → Brand → Model, with results rendered as a spec card broken
  into **Bootstrap 5 accordions** (Engine & Performance, Safety & Colors, Interior & Exterior,
  Warranty) to avoid cognitive overload
- ✅ **Side-by-side comparison** — a sticky header keeps both vehicle names/images pinned while
  you scroll the spec table; differing values are highlighted; on mobile the table becomes a
  **swipeable card carousel** with scroll-snap and dot indicators
- ✅ **New & electric vehicle showcase** with collapsible feature details per card
- ✅ **Brand directory** with live search across 30+ manufacturer logos
- ✅ **Top models, feedback form (EmailJS), newsletter, career, about, privacy & terms pages**
- ✅ Fully responsive from mobile to desktop, deployed on Netlify

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (custom design-system tokens), Bootstrap 5 (accordions, collapse),
  vanilla JavaScript
- **Fonts / Icons:** Google Fonts (Poppins, Inter), Font Awesome 6
- **Integrations:** EmailJS (feedback form)
- **Deployment:** Netlify

---

## 📁 Folder Structure

\`\`\`bash
VIndia/
├── index.html                  # Home — hero, search, categories, brand marquee
├── filters.html                # Type → Brand → Model filter + spec accordion card
├── model_comparision.html      # Side-by-side compare (sticky header + mobile carousel)
├── new-vehicle.html            # Latest launches & EVs
├── top-vehicle-model.html      # Featured / top-rated models by category
├── vehicle-logo.html           # Searchable brand logo directory
├── about_us.html
├── career.html
├── feedback.html
├── contact-support.html
├── privacy-policy.html
├── terms-or-service.html
│
├── assets/
│   ├── css/
│   │   ├── theme.css            # Shared design system (tokens, nav, buttons, cards, footer…)
│   │   └── <page>.css           # Per-page overrides (filters.css, new-vehicle.css, etc.)
│   ├── js/
│   │   ├── theme.js              # Nav toggle, scroll reveal, sticky nav, ripple, back-to-top
│   │   ├── script.js              # Cascading filter data + dropdown logic
│   │   ├── searchbar.js           # Homepage live search
│   │   ├── filters_display.js     # Filter results renderer + vehicle data
│   │   ├── model_comparision.js   # Comparison renderer + vehicle data
│   │   └── <page>.js              # Page-specific behaviour
│   ├── images/                   # Hero art, brand strip, featured cars, vehicle photos
│   └── logo/                     # Site logo
│
├── logo images/                  # Brand logos used on vehicle-logo.html
├── vehicle-images/                # Images for top-vehicle-model.html
├── new-vehicles-images/            # Images for new-vehicle.html
└── README.md
\`\`\`

---

## 🚀 How to Use

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/Jayeshkalkate/VIndia.git
   \`\`\`
2. Open `index.html` in any browser — no build step required.
3. To deploy your own copy, drag the folder into Netlify (or any static host).

---

## 🧑‍💻 Developer

**Jayesh Kalkate**
📫 [kalkatejayesh@gmail.com](mailto:kalkatejayesh@gmail.com)
🌐 [Portfolio](https://devjayesh-portfolio.netlify.app)
🔗 [LinkedIn](https://linkedin.com/in/jayesh-kalkate-31a250242)

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

> *"Made with 🇮🇳 love to highlight Indian vehicles and grow frontend development skills."*
