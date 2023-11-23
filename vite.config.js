import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      entry: 'src/index.ts',
      format: ['es'],
      name:'DuseWebComponent'
    },
    // minify: false,
    rollupOptions: {
      // external: /^lit/
    }
  }
});