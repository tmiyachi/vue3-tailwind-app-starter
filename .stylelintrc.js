module.exports = {
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
