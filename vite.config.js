import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Your backend server URL
        changeOrigin: true, // Change the origin of the request
        secure: false, // Disable SSL verification (for development)
      },
    },
  },
  plugins: [react()],
})
