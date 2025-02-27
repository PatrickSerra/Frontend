import Checker from 'vite-plugin-checker';

export default {
  plugins: [
    Checker({
      typescript: true, // Habilita o type-checking do TypeScript
      terminal: true,
    }),
  ],
};
