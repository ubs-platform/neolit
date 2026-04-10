import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@ubs-platform/neolith": path.resolve(__dirname, "src/package/core"),
            "@ubs-platform/neolith/jsx-runtime": path.resolve(__dirname, "src/package/core/jsx-runtime"),
            "@ubs-platform/neolith/jsx-dev-runtime": path.resolve(__dirname, "src/package/core/jsx-dev-runtime"),
        },
    },
});
