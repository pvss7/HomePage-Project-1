import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      eqeqeq: "warn",
    },
  },
];
