const { FlatCompat } = require("@eslint/eslintrc");
const nextPlugin = require("eslint-config-next");

const compat = new FlatCompat();

module.exports = [
  {
    // This is the new ignores property for flat config
    ignores: ["src/styles/vendor/**", ".next/", "build/"],
  },
  // Use the FlatCompat utility to extend the next.js config
  ...compat.extends("next/core-web-vitals"),
];
