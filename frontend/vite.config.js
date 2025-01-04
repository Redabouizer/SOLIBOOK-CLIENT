import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    server: {
        host: true,
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Map @ to the src folder
        },
    },
    css: {
        devSourcemap: false, // Disable CSS source maps during development
    },
    build: {
        sourcemap: false, // Disable source maps for production builds
    },
});
