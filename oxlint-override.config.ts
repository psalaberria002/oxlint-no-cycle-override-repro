import { defineConfig } from 'oxlint';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.ts'],
      plugins: ['import'],
      rules: {
        'import/no-cycle': 'error',
      },
    },
  ],
});
