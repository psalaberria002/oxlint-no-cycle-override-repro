import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['import'],
  rules: {
    'import/no-cycle': 'error',
  },
});
