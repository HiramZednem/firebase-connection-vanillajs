import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    target: 'esnext'
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  define: {
    'process.env': process.env
  }
})