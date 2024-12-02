// vite.config.ts
import { defineConfig } from "file:///E:/study/%E6%9D%A8%E6%9D%91%E9%95%BF%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E5%B8%88-%E5%A4%A7%E5%8E%82%E7%9B%B4%E9%80%9A%E8%BD%A6/bubucuo/fish-ui-sy/node_modules/.pnpm/vite@5.4.7_@types+node@22.7.0/node_modules/vite/dist/node/index.js";
import react from "file:///E:/study/%E6%9D%A8%E6%9D%91%E9%95%BF%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E5%B8%88-%E5%A4%A7%E5%8E%82%E7%9B%B4%E9%80%9A%E8%BD%A6/bubucuo/fish-ui-sy/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.4.7_@types+node@22.7.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dts from "file:///E:/study/%E6%9D%A8%E6%9D%91%E9%95%BF%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E5%B8%88-%E5%A4%A7%E5%8E%82%E7%9B%B4%E9%80%9A%E8%BD%A6/bubucuo/fish-ui-sy/node_modules/.pnpm/vite-plugin-dts@4.2.3_@types+node@22.7.0_rollup@4.22.4_typescript@5.6.2_vite@5.4.7_@types+node@22.7.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\study\\\u6768\u6751\u957F\u524D\u7AEF\u67B6\u6784\u5E08-\u5927\u5382\u76F4\u901A\u8F66\\bubucuo\\fish-ui-sy";
function resolve(str) {
  return path.resolve(__vite_injected_original_dirname, str);
}
var vite_config_default = defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  resolve: {
    alias: {
      "zhangzhaohong9-fish-ui-sy": path.resolve(__vite_injected_original_dirname, "./src/index.ts")
    }
  },
  test: {
    globals: true,
    environment: "jsdom"
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "zhangzhaohong9-fish-ui-sy",
      fileName: (format) => `fish-ui-sy.${format}.js`,
      formats: ["cjs", "es", "umd"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        format: "cjs"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzdHVkeVxcXFxcdTY3NjhcdTY3NTFcdTk1N0ZcdTUyNERcdTdBRUZcdTY3QjZcdTY3ODRcdTVFMDgtXHU1OTI3XHU1MzgyXHU3NkY0XHU5MDFBXHU4RjY2XFxcXGJ1YnVjdW9cXFxcZmlzaC11aS1zeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3R1ZHlcXFxcXHU2NzY4XHU2NzUxXHU5NTdGXHU1MjREXHU3QUVGXHU2N0I2XHU2Nzg0XHU1RTA4LVx1NTkyN1x1NTM4Mlx1NzZGNFx1OTAxQVx1OEY2NlxcXFxidWJ1Y3VvXFxcXGZpc2gtdWktc3lcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0dWR5LyVFNiU5RCVBOCVFNiU5RCU5MSVFOSU5NSVCRiVFNSU4OSU4RCVFNyVBQiVBRiVFNiU5RSVCNiVFNiU5RSU4NCVFNSVCOCU4OC0lRTUlQTQlQTclRTUlOEUlODIlRTclOUIlQjQlRTklODAlOUElRTglQkQlQTYvYnVidWN1by9maXNoLXVpLXN5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZnVuY3Rpb24gcmVzb2x2ZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgc3RyKTtcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoe3JvbGx1cFR5cGVzOnRydWV9KV0sXG4gIHJlc29sdmU6e1xuICAgIGFsaWFzOntcbiAgICAgICd6aGFuZ3poYW9ob25nOS1maXNoLXVpLXN5JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2luZGV4LnRzJylcbiAgICB9XG4gIH0sIFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICB9LFxuICBidWlsZDp7XG4gICAgb3V0RGlyOiAnZGlzdCcsIFxuICAgIGxpYjp7XG4gICAgICBlbnRyeTpyZXNvbHZlKCdzcmMvaW5kZXgudHMnKSwgXG4gICAgICBuYW1lOiBcImZpc2gtdWktc3lcIiwgXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCk9PmBmaXNoLXVpLXN5LiR7Zm9ybWF0fS5qc2AsIFxuICAgICAgZm9ybWF0czpbXCJjanNcIiwgXCJlc1wiLCBcInVtZFwiXVxuICAgIH0sIFxuICAgIHJvbGx1cE9wdGlvbnM6e1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBcbiAgICAgIG91dHB1dDp7XG4gICAgICAgIGdsb2JhbHM6e1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLCBcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCJcbiAgICAgICAgfSwgXG4gICAgICAgIGZvcm1hdDogXCJjanNcIlxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBTXpDLFNBQVMsUUFBUSxLQUFhO0FBQzVCLFNBQU8sS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFDcEM7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBQyxhQUFZLEtBQUksQ0FBQyxDQUFDO0FBQUEsRUFDMUMsU0FBUTtBQUFBLElBQ04sT0FBTTtBQUFBLE1BQ0osNkJBQTZCLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxJQUN2RTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFNO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixLQUFJO0FBQUEsTUFDRixPQUFNLFFBQVEsY0FBYztBQUFBLE1BQzVCLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFTLGNBQWMsTUFBTTtBQUFBLE1BQ3hDLFNBQVEsQ0FBQyxPQUFPLE1BQU0sS0FBSztBQUFBLElBQzdCO0FBQUEsSUFDQSxlQUFjO0FBQUEsTUFDWixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBTztBQUFBLFFBQ0wsU0FBUTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFFRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
