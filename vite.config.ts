import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you want to process images with vite-imagetools, you can import the plugin here
// import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    // imagetools()
  ],
  server: {
    open: true
  },
  build: {
    outDir: 'dist'
  },
  // For testing
  test: {
    globals: true,
    environment: 'happy-dom'
  }
});
