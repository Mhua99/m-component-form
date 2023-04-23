import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [dts({
    outputDir: "dist",
    staticImport: true,
    insertTypesEntry: true
  }), vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "packages"),
    },
  },
  build: {
    // target: "modules",
    //压缩
    lib: {
      entry: "packages/install.ts",
      name: "index",
      fileName: (format) => `index.${format}.js`,
    },
    // minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
