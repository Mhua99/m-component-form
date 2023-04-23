// vite.config.ts
import { defineConfig } from "file:///C:/Users/Lenovo/Desktop/vue-form/vite-project/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Lenovo/Desktop/vue-form/vite-project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Lenovo/Desktop/vue-form/vite-project/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
import dts from "file:///C:/Users/Lenovo/Desktop/vue-form/vite-project/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Lenovo\\Desktop\\vue-form\\vite-project";
var vite_config_default = defineConfig({
  plugins: [dts({
    outputDir: "dist",
    staticImport: true,
    insertTypesEntry: true
  }), vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "~": path.resolve(__vite_injected_original_dirname, "packages")
    }
  },
  build: {
    // target: "modules",
    //压缩
    lib: {
      entry: "packages/install.ts",
      name: "index",
      fileName: (format) => `index.${format}.js`
    },
    // minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFx2dWUtZm9ybVxcXFx2aXRlLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEZXNrdG9wXFxcXHZ1ZS1mb3JtXFxcXHZpdGUtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTGVub3ZvL0Rlc2t0b3AvdnVlLWZvcm0vdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW2R0cyh7XG4gICAgb3V0cHV0RGlyOiBcImRpc3RcIixcbiAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXG4gICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZVxuICB9KSwgdnVlKCksIHZ1ZUpzeCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBcIn5cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJwYWNrYWdlc1wiKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIHRhcmdldDogXCJtb2R1bGVzXCIsXG4gICAgLy9cdTUzOEJcdTdGMjlcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcInBhY2thZ2VzL2luc3RhbGwudHNcIixcbiAgICAgIG5hbWU6IFwiaW5kZXhcIixcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIC8vIG1pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvL1x1NUZGRFx1NzU2NVx1NjI1M1x1NTMwNXZ1ZVx1NjU4N1x1NEVGNlxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcbiAgICAgIC8vaW5wdXQ6IFtcImluZGV4LnRzXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFFakIsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxFQUNwQixDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ25CLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNsQyxLQUFLLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQTtBQUFBLElBR0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUztBQUFBLElBQ2pDO0FBQUE7QUFBQSxJQUVBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxDQUFDLEtBQUs7QUFBQTtBQUFBLE1BRWhCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
