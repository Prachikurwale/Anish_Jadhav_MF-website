import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Configure React plugin more explicitly
      jsxImportSource: 'react',
      include: "**/*.{jsx,js,ts,tsx}",
    }),
    tailwindcss()
  ],
  server: {
    port: 5173,
    host: 'localhost'
  },
  esbuild: {
    // Ensure proper JSX handling
    jsx: 'automatic'
  }
})
