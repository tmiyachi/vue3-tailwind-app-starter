/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
  tabWidth: 2,
  htmlWhitespaceSensitivity: 'ignore',
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  printWidth: 80,
  overrides: [
    {
      files: ['**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
