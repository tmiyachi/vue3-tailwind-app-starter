/* @type {import('eslint').Linter.FlatConfig[]} **/
export default [
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
  'plugin:tailwindcss/recommended',
  'prettier',
];
