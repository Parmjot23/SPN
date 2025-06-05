# SPN Logistics Website

This repository contains a lightweight single page application for SPN Logistics
located in Les Cèdres, QC. The site loads React and React Router from CDN links
and uses Tailwind CSS for styling. GSAP powers a small hero animation and
EmailJS delivers form submissions.

## Features and Pages

- **Home** – hero banner with fade‑in effect and a quick contact form.
- **About** – background on the company and its mission.
- **Services** – list of trucking, warehousing and logistics options.
- **Fleet** – photos and descriptions of available equipment.
- **Careers** – application form for job inquiries.
- **Contact** – address, map and another contact form.

All forms (on the Home, Careers and Contact pages) use EmailJS. Replace the
`YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` placeholders in
`js/app.js` with your values to enable them.

Open `index.html` in your browser to view the site. No build step is required as
the project is entirely static.
