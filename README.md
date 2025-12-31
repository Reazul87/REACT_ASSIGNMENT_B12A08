# HERO.IO App Manager

![Overview Of Hero](Hero-io-screenshot.png)

## 🚀 Live Demo
- **[Netlify](https://hero-io-10.netlify.app/)**
- **[Cloudflare Pages](https://hero-io-10.pages.dev/)**

This repository contains the front-end source code for **HERO.IO App Manager** — a responsive web application to browse, install, manage, and uninstall software apps.  
Built with React + Tailwind CSS. Installed apps are saved persistently using browser **Local Storage**.

## ✨ Core Features
- **App Installation & Management** — "Install" apps; view all installed ones on a dedicated page (data saved to Local Storage)
- **Uninstallation** — Remove apps permanently from the installed list (updates UI & storage instantly)
- **Dynamic Sorting** — Sort installed apps by size (low → high or high → low) with accurate numeric handling
- **Responsive Design** — Fully mobile/tablet/desktop friendly layout
- **Navigation & Components** — Clean Navbar + Footer across pages
- **Error Handling** — Custom 404 page + "App Not Found" handling
- **Notifications/Alerts** — Toast or sweet alerts for user feedback

## 🛠️ Technologies Used
- React (v18/19) — Functional components, Hooks (useState, useEffect)
- Tailwind CSS — Utility-first responsive styling
- Vite — Fast dev server & build tool
- React Router (assumed) — For multi-page feel (home, install page, etc.)
- Browser Local Storage — Persistent data without backend
- React Toastify / SweetAlert2 — User notifications

## Dependencies
Main runtime ones (see package.json for full list):
- react & react-dom
- tailwindcss (+ daisyui or similar if used)
- react-router-dom
- react-toastify or sweetalert2
Pure client-side project — no server/backend required.

## ⚡ How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/RazulBR/REACT_ASSIGNMENT_B12A08.git 
   cd REACT_ASSIGNMENT_B12A08
```
---
### 2. Install dependencies

```bash
npm install
```
---

### 3. Start the project

```bash
npm run dev
```
---

### 4. Open in browser

```bash
Go to http://localhost:5173 (or the port shown in your terminal)
```
---

## 🧑‍💻 Author

**MD REAZUL HASAN**

[GitHub Profile](https://github.com/Reazul87)

---
