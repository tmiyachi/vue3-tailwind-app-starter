/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'consistent-return': 'error',
  },
};
