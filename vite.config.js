import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";    //path引入可能报错可以使用 import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  }
})
