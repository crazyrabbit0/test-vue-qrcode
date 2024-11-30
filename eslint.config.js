import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const autoImports = require('./eslint.auto-import.json')

export default [
    js.configs.recommended,
    stylistic.configs['recommended-flat'],
    ...pluginVue.configs['flat/recommended'],
    {
        ignores: [
            'dist/*',
        ],
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...autoImports.globals,
            },
        },
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            'no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            'no-template-curly-in-string': 'error',
            'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            '@stylistic/indent': 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { baseIndent: 1 }],
            'vue/component-name-in-template-casing': ['error', 'kebab-case'],
            'vue/multi-word-component-names': 'off',
        },
    },
]
