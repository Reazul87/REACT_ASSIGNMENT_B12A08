> ### [HERO.IO](https://hero-io-10.netlify.app/)

> > [CloudFlare](https://hero-io-10.pages.dev/) [Surge](http://hero-io.surge.sh/) [Netlify](https://hero-io-10.netlify.app/)

> This repository contains the front-end source code for the HERO.IO App Manager, a responsive web application designed to showcase, install, manage, and uninstall software applications.

> The application is built using React with Tailwind CSS for aesthetic and fully responsive styling. Data persistence for "installed apps" is managed locally using browser Local Storage.
---

> ## ✨ Features

> The HERO.IO App provides the following core functionalities:

> - App Installation & Management:

> > Users can "install" apps, which saves the app data (ID, size, ratings, etc.) to the user's browser storage.

> > The dedicated Installation Page lists all currently installed applications.

> - App Uninstallation:

> > Apps can be permanently removed from the installed list directly from the Installation Page, immediately updating both the UI and local storage.

> - Dynamic Sorting:

> > Users can sort the list of installed apps dynamically by size (low-to-high or high-to-low) via a simple dropdown control. The sorting logic correctly handles numeric conversion for accurate results.

> - Responsive Layout & Navigation:

> > Includes a standard navigation structure (Navbar) and persistent footer component (Footer).

> > The layout is designed to be fully responsive for mobile, tablet, and desktop views.

> - Robust Error Handling:

> > Custom pages for generic 404 routing errors (ErrorPage) and specific "App Not Found" scenarios (NotFound).

> ## 🛠️ Technology Stack

> > Framework: React (Functional Components and Hooks)

> > Styling: Tailwind CSS (for utility-first, responsive design)

> > Routing: React Router (NavLink, assumed)

> > State/Data Management: useState, useEffect

> > Sweet Alert : React toast

> > Persistence: Browser Local Storage