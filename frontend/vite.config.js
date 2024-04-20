import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/books": {
				target: "https://backend-book-store-gs3k.onrender.com",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
