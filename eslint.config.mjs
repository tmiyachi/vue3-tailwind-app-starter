import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
// import tailwind from 'eslint-plugin-tailwindcss';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

/**
 * @see https://eslint.org/docs/latest/use/configure/
 */
export default defineConfig([
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...tailwind.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: ['dist/**/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es6,
      },
    },
    rules: {
      'consistent-return': 'error',
      'no-sequences': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
]);
