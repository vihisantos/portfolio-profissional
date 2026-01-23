import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-profissional/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // drop_console: true, // DEBUG: Enabled for troubleshooting
        // drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },
})
