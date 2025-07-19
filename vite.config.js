import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/Srishti_Portfolio/",
    plugins: [react()],
    build: {
        minify: "terser",
    },
});
