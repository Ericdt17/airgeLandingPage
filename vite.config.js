import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /** `/` = SPA à la racine ; `base: './'` donne `BASE_URL: './'` et casse le matching React Router */
  base: '/',
  server: {
    port: 5175,
    strictPort: false,
  },
})
