# SPN Logistics

A modern trucking-and-logistics React SPA built with Vite, TypeScript, Tailwind, and more.

## Quick Start

```bash
pnpm install
pnpm dev
```

* Visit `http://localhost:5173/`.

### Environment Variables

Copy `.env.example` to `.env` and fill in:

* `VITE_EMAILJS_SERVICE_ID`
* `VITE_EMAILJS_TEMPLATE_ID`
* `VITE_EMAILJS_PUBLIC_KEY`

### Deploy on Netlify

Uses `netlify.toml` for configuration:

* Build command: `pnpm build`
* Publish directory: `dist`

### Assets & Credits

Hero video is from [Pexels / Unsplash] or other royalty-free sources.
All images in `/src/assets` are placeholders from Unsplash with direct references:

* `mixkit-cargo-truck-driving-on-the-highway-28787-hd-ready.mp4` from Mixkit (royalty-free) or a similar source.

### Required Images

Place the following files in `src/assets`:

1. **mixkit-cargo-truck-driving-on-the-highway-28787-hd-ready.mp4** – A short looping video of a semi‑truck on the road. This plays in the home page hero section.
2. **image_processing20210620-27954-1edhf73.png** – A small logo used for testimonial avatars and partner logos. A 200×200 PNG with a transparent background works well.

You can replace these placeholders with your own media files, keeping the same file names so the components load them automatically.

### Contributing

* Fork this repo and create a feature branch.
* Add / update tests in `src/tests`.
* Open a pull request when ready.

License: MIT

