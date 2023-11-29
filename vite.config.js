import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      entry: 'src/index.ts',
      format: ['es'],
      // fileName: (format) => `index.${format}.js`,
      name:'DuseWebComponent'
    },
    minify: false,
    rollupOptions: {
      // external: /^lit/
    }
  }
});