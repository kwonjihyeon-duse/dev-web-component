import { resolve } from 'path';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svgo';

export default defineConfig({
  assetsInclude: ['/sb-preview/**'],
  publicDir: false,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
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
  },
  plugins: [
    svg({
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertColors: {
                currentColor: true,
              },
            },
          },
        },
      ],
    })
  ]
});