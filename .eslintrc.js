module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint"],
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
    "jest/valid-title": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
  },
};
