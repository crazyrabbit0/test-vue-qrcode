export default {
    extends: [
        'stylelint-config-standard-scss',
        '@stylistic/stylelint-config',
        'stylelint-config-standard-vue/scss',
    ],
    rules: {
        '@stylistic/indentation': [4, { baseIndentLevel: 1 }],
        'selector-id-pattern': [
            '^([a-z][a-z0-9]*)([-_]+[a-z0-9]+)*$',
            { message: selector => `Expected id selector "${selector}" to be kebab-case and/or snake-case` },
        ],
        'selector-class-pattern': [
            '^([a-z][a-z0-9]*)([-_]+[a-z0-9]+)*$',
            { message: selector => `Expected class selector "${selector}" to be kebab-case and/or snake-case` },
        ],
    },
}
