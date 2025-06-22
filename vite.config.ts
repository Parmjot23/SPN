import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// If you want to process images with vite-imagetools, you can import the plugin here
// import { imagetools } from 'vite-imagetools';

export default defineConfig(async () => {
  const { default: glsl } = await import('vite-plugin-glsl');
  return {
    plugins: [
      react(),
      glsl(),
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
  };
});
