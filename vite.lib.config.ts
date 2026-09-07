import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Library build — produces dist/salti-design-system.js + dist/style.css.
// Run via `npm run build:lib`.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: false, // tsc already wrote .d.ts files into dist/
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SaltiDesignSystem',
      fileName: () => 'salti-design-system.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    cssCodeSplit: false,
  },
});
