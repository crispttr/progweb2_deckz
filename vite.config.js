import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../build',
    //default
    target: 'ES2022',
    emptyOutDir: true,
  },
})
