// 参考: ESLint の Plugin と Extend の違い
// https://blog.ojisan.io/eslint-plugin-and-extend/
// 参考: TypeScript / JavaScript の import を自動でソートする
// https://buildersbox.corp-sansan.com/entry/2021/05/28/110000

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: '@/utils/**', group: 'internal', position: 'before' },
          { pattern: '@/libs/**', group: 'internal', position: 'before' },
          { pattern: '@/hooks/**', group: 'internal', position: 'before' },
          { pattern: '@/components/**', group: 'internal', position: 'before' },
          { pattern: '@/const/**', group: 'internal', position: 'before' },
          { pattern: '@/types/**', group: 'internal', position: 'before' },
        ],
      },
    ],
  },
}
