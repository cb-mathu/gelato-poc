import { ConfigEnv, defineConfig, UserConfigExport } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-dts';
import path from 'path';

// https://vitejs.dev/config/

export default ({ mode }: ConfigEnv): UserConfigExport =>
  defineConfig({
    plugins: [
      VueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      Vue(),
      dts(),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.scss'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      dedupe: ['vue'],
    },
    build: {
      emptyOutDir: false,
      cssCodeSplit: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: '@chargebee/gelato',
      },
      sourcemap: mode === 'development' ? true : false,
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        watch: {},
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  });
