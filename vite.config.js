import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://berkeleyautomation.github.io/robovista/ — the base path
// must match the repository name for assets to resolve.
export default defineConfig({
  plugins: [react()],
  base: '/robovista/',
})
