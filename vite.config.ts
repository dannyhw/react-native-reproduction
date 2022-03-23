import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': './src',
      'react-native': 'react-native-web',
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['react-native-reanimated/plugin'],
        parserOpts: {plugins: ['classProperties']},
      },
    }),
  ],
});
