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
    'plugin:tailwindcss/recommended', // TODO: v1.x not support tailwind v3
    'prettier',
  ],
  rules: {},
};
