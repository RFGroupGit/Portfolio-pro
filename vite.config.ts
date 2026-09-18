import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4173,
    strictPort: true,
    host: '127.0.0.1',
  },
  preview: {
    port: 4174,
    strictPort: true,
    host: '127.0.0.1',
  },
  build: {
    target: 'es2022',
    cssMinify: true,
    sourcemap: false,
  },
})
