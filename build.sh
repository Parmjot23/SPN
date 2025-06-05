#!/usr/bin/env bash
set -e

# Clean and recreate dist directory
rm -rf dist
mkdir dist

# Copy all project files to dist (excluding dist itself and this script)
rsync -av --exclude 'dist' --exclude 'build.sh' ./ ./dist/

# Replace EmailJS placeholders with Netlify environment variables
sed -i "s/YOUR_PUBLIC_KEY/${VITE_EMAILJS_KEY}/g" dist/js/app.js
sed -i "s/YOUR_SERVICE_ID/${VITE_EMAILJS_SERVICE}/g" dist/js/app.js
sed -i "s/YOUR_TEMPLATE_ID/${VITE_EMAILJS_TEMPLATE}/g" dist/js/app.js

echo "Build completed. Files are in the dist directory."
