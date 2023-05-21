import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            runtimeOnly: false,
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
        }),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                            @use 'sass:math';
                            @import "@/assets/css/files-scss";
                         `,
            },
        },
    },
});
