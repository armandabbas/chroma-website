import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        events: resolve(__dirname, 'events.html'),
        location: resolve(__dirname, 'location.html'),
        shop: resolve(__dirname, 'shop.html')
      }
    }
  }
});
