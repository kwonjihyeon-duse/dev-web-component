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
      name: 'DuseWebComponent',
    },
    minify: false,
    rollupOptions: {
      // external: /^lit/
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          console.log('extType', extType);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          console.log('assetInfo', assetInfo);
          return 'assets/js/[name]-[hash].js';
        },
        // entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
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
    }),
  ],
});
