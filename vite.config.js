import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output the build files to the 'dist' folder
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Alias to simplify imports
    },
  },
});
