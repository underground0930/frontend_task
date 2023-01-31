// 参考: 既存プロジェクトをStylelint v14にアップグレードするときに注意すべき点
// https://flex-box.net/stylelint-v14/

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'custom-property-pattern': null,
    'value-keyword-case': null,
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-function-pattern': null,
  },
}
