import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {svgBuilder} from "./src/plugins/svgBuilder";

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0"
    },
    plugins: [
        vue(),
        svgBuilder('./src/assets/imgs/')
    ],
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
