import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfoliov3/',
  plugins: [react()],
  },
);
