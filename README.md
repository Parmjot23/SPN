# SPN Logistics Website

This repository contains a lightweight single page application for SPN Logistics
located in Les Cèdres, QC. The site loads React and React Router from CDN links
and uses Tailwind CSS for styling. GSAP powers a small hero animation and
EmailJS delivers form submissions.

## Features and Pages

- **Home** – full screen video hero, quick contact form and previews of services, fleet and testimonials.
- **About** – company history, mission, values and achievements.
- **Services** – interactive cards outlining freight management, express delivery and more.
- **Fleet** – photos and descriptions of available equipment.
- **Careers** – expandable job listings with file upload forms.
- **Contact** – easy-to-use form, clickable phone/email and an embedded map.

All forms (on the Home, Careers and Contact pages) use EmailJS. Replace the
`YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` placeholders in
`js/app.js` with your values to enable them.

Open `index.html` in your browser to view the site. No build step is required as
the project is entirely static.

## Continuous Deployment with Netlify

The repository includes a minimal `netlify.toml` configuration so the site can
be deployed directly from its root folder. To enable automatic deployments:

1. Push this code to your Git hosting provider.
2. In Netlify, create a new site from Git and choose this repository.
3. Keep the default settings—no build command is needed and the publish
   directory is `./`.
4. Update the EmailJS placeholders in `js/app.js` with your own keys before
   deploying.

Every push to the default branch will trigger a new deployment.
