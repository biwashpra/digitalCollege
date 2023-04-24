import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/student": "http://localhost:5000",
      "/fee": "http://localhost:5000",
      "/admin": "http://localhost:5000",
      "/admin/*": "http://localhost:5000",
      "/fee/*": "http://localhost:5000",
      "/student/*": "http://localhost:5000",
      "/admin/admindashboard": "http://localhost:5000",
    },
  },
  plugins: [react()],
});
