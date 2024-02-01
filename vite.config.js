import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import svg from 'vite-plugin-svgo';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
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
            console.log('assetInfo', assetInfo);
            let extType = assetInfo.name.split('.').at(1);
            console.log('extType', extType);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            // console.log('assetInfo', assetInfo);
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
      istanbul({
        include: 'src/*',
        exclude: ['node_modules'],
        extension: ['.js', '.ts'],
        requireEnv: true,
      }),
    ],
  };
});
