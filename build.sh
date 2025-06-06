#!/usr/bin/env bash
set -e

# Clean build
rm -rf dist

# Inject environment variables for EmailJS
export VITE_EMAILJS_KEY=${VITE_EMAILJS_KEY}
export VITE_EMAILJS_SERVICE=${VITE_EMAILJS_SERVICE}
export VITE_EMAILJS_TEMPLATE=${VITE_EMAILJS_TEMPLATE}

# Install dependencies based on package-lock for consistent builds
npm ci

npm run build

echo "Build completed. Files are in the dist directory."
