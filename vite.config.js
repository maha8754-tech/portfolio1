import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio1/',
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@images': path.resolve(__dirname, './src/images'),
  //     '@components': path.resolve(__dirname, './src/components'),
  //   },
  // },
})
