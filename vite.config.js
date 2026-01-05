import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Esta es la configuración que permite unir Vite con Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    // 1. Permite usar funciones de test globalmente (sin importarlas cada vez)
    globals: true,
    // 2. Simula un navegador (DOM) en la terminal para que React funcione
    environment: 'jsdom',
    // 3. Indica dónde están las configuraciones extra de los tests
    setupFiles: './src/setupTests.js',
  },
})