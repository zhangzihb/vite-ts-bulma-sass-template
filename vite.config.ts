import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        input: "src/index.ts",
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
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
