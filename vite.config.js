import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Test deploy is served from https://ehehee.github.io/robovista-test/ so the
// base path must match the repository name for assets to resolve. Switch this
// back to '/robovista/' for the formal berkeleyautomation.github.io deploy.
export default defineConfig({
  plugins: [react()],
  base: '/robovista-test/',
})
