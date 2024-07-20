/* eslint-env node */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import license from 'rollup-plugin-license';

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

  // base: './', // ルートではないパブリックパスにデプロイする場合
  root: path.resolve(__dirname, 'src'),
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
    emptyOutDir: true,
    assetsDir: 'assets',
    // assetsInlineLimit: 0,  // アセットのをbase64インライン化を無効にする場合
    // sourcemap: true,

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
          cwd: process.cwd(), // The default

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
