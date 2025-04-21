import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        '@react-navigation/core',
        '@react-navigation/elements',
        '@react-navigation/native',
        '@react-navigation/stack',
        '@react-navigation/bottom-tabs',
        '@react-navigation/drawer'
      ]
    }
  }
})
