import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // 👈 Add this line for GitHub Pages
  plugins: [
    viteSourceLocator({
      prefix: 'mgx'
    }),
    react()
  ],
})
