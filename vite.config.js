// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vueConfig from './vue.config'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    base: vueConfig.publicPath,
    plugins: [
        Vue({
            template: { transformAssetUrls },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify({
            autoImport: true,
            /* styles: {
                configFile: 'src/styles/settings.scss',
            }, */
        }),
        Components(),
        Fonts({
            google: {
                families: [{
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
            ],
            eslintrc: {
                enabled: true,
                filepath: './eslint.auto-import.json',
            },
            vueTemplate: true,
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        port: 9999,
    },
    esbuild: {
        drop: ['console', 'debugger'],
    },
    // Build as a single js file
    // build: {
    //     // Import all assets inline as base64 URLs to avoid extra http requests
    //     assetsInlineLimit: () => true,
    //     rollupOptions: {
    //         output: {
    //             name: 'TestVueQrcode',
    //             format: 'iife',
    //             entryFileNames: '[name].js',
    //             // assetFileNames: 'assets/[name].[ext]',
    //         },
    //     },
    // },
})
