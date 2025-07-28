import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    plugins: [vue()],
    build: {
      outDir: 'static',
      assetsDir: 'assets',
      rollupOptions: {
        input: 'src/main.ts',
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  };
});
