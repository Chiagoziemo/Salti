import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev/demo server — renders demo/App.tsx via index.html so components can be
// checked visually in a browser. The library build uses vite.lib.config.ts.
export default defineConfig({
  plugins: [react()],
});
