/**
 * @see https://stylelint.io/user-guide/configure/
 * @type {import('stylelint').Config}
 */
export default {
  ignoreFiles: ['dist/**/*'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
};
