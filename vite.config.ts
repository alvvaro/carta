// vite.config.js
import { cloudflare } from '@cloudflare/vite-plugin';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';

import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    eslintPlugin(),
    tailwindcss(),
    cloudflare(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
