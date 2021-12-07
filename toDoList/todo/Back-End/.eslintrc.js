module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'trybe-backend-typescript',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // 'no-console': 'off',
    // '@typescript-eslint/indent': ['error', 2],
  },
};
