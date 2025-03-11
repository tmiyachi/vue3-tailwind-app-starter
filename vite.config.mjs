/* eslint-env node */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import license from 'rollup-plugin-license';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BANNER = `
/*! FOLLOWING LIBRARIES ARE USED.
 * - vue (https://github.com/vuejs/core/blob/main/LICENSE)
 *   The MIT License (MIT)
 *   Copyright (c) 2018-present, Yuxi (Evan) You
 *
 * - tailwindcss (https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE)
 *   The MIT License (MIT)
 *   Copyright (c) Tailwind Labs, Inc.
 */`;

export default defineConfig({
  plugins: [vue()],

  root: path.resolve(__dirname, 'src'),
  base: './',
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    // target: ['firefox86'], // バンドルのブラウザ互換性のターゲットを指定する
    outDir: '../dist',
    assetsDir: 'assets',
    // assetsInlineLimit: 0,  // アセットのをbase64インライン化を無効にする
    // sourcemap: true,  // ソースマップファイルを別に作成する
    emptyOutDir: true, // ビルド時に outDir を空にする

    // assetsInclude
    rollupOptions: {
      output: {
        entryFileNames: '[name].bundle.js',
        chunkFileNames: `js/[name].js`, // vendor chunk filenames
        assetFileNames: `assets/[name].[ext]`, // CSSもassetsになる
      },
      plugins: [
        license({
          sourcemap: true,
          banner: BANNER,
          thirdParty: {
            // includePrivate: true, // Default is false.
            // multipleVersions: true, // Default is false.
            // output: {
            //   file: path.join(__dirname, 'dist', 'DEPENDENCIES.txt'),
            // },
          },
        }),
      ],
    },
  },

  define: {
    __VUE_OPTIONS_API__: false, // Option API を使う場合はtrue
    __VUE_PROD_DEVTOOLS__: false,
  },

  server: {
    port: 8080,
    open: true,
    proxy: {
      // '/api': 'http://localhost:8081',
      // '/api': {
      //  target: 'http://example.com',
      //  changeOrigin: true,
      //  rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
});
