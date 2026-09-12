import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Cấu hình alias @ trỏ thẳng vào thư mục src
      '@': path.resolve(__dirname, './src'),
    },
  },

});
