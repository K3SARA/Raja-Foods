import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5200,
    strictPort: true,
    warmup: {
      clientFiles: ["./src/App.jsx", "./src/main.jsx", "./src/api.js", "./src/styles.css"]
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "socket.io-client"]
  }
});
