module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: ['vue', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
