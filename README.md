# SPN Logistics Website

This repository contains a modern single page application for **SPN Logistics**. The app now uses **Vite**, **React 18** and **Tailwind CSS 3** with GSAP animations and EmailJS forms.

## Features and Pages

- **Home** – full screen video hero with Ken Burns effect, service previews and stats counters.
- **About** – company history, mission and values.
- **Services** – interactive accordion of offered services.
- **Fleet** – photo gallery with lightbox.
- **Careers** – searchable job listings with application forms.
- **Contact** – contact form and embedded map.

A dark mode is available with a toggle in the navigation bar. Scroll triggered animations enhance each section.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server with hot module reloading:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

EmailJS credentials are provided via `VITE_EMAILJS_KEY`, `VITE_EMAILJS_SERVICE` and `VITE_EMAILJS_TEMPLATE` environment variables during build or development.

## Deployment

The site can be deployed on any static host. The included `build.sh` script is used by Netlify to generate the optimized `dist` folder.
