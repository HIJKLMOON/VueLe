import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // 1. 插件配置（Vue SFC 编译插件）
  plugins: [vue()],

  // 2. 开发服务器配置
  server: {
    host: "0.0.0.0", // 局域网可访问
    port: 33301, // 自定义端口
    open: true, // 启动后自动打开浏览器
    strictPort: true, // 端口被占用时直接报错
    proxy: {
      // 接口代理（解决跨域）
      "/api": {
        target: "http://localhost:3000", // 后端接口地址
        changeOrigin: true, // 开启跨域
        rewrite: (path) => path.replace(/^\/api/, ""), // 移除/api前缀
      },
    },
  },

  // 3. 路径别名（简化导入）
  resolve: {
    alias: {
      "@": import.meta.dirname + "/src", // 用@代替src目录
    },
  },

  // 4. 构建配置（后续打包用）
  build: {
    outDir: "dist", // 打包输出目录（默认dist）
    sourcemap: false, // 生产环境不生成sourcemap（减小体积）
    chunkSizeWarningLimit: 1000, // 分包大小警告阈值（默认500kb）
  },

  // 5. 环境变量前缀（识别.env文件中的VITE_*变量）
  envPrefix: "VITE_",
});
