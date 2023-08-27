import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import {fileURLToPath, URL} from "url";
import {resolve, dirname} from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    plugins: [vue(), svgLoader(), vueI18n({

        include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/public/locales/**'),
    })],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
