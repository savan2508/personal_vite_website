module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest', // Ensure you're using the latest ECMAScript version
      sourceType: 'module', // Use module syntax
    },
    rules: {
      'no-console': 'warn', // Override rule: Warn on console.log usage
      // Add any custom rules here
    },
  },
]
