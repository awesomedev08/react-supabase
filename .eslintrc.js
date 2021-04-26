module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
        allowImportExportEverywhere: true,
    },
    plugins: ['@typescript-eslint', 'import', 'testing-library'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        // `@typescript-eslint`
        // https://github.com/typescript-eslint/typescript-eslint
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                argsIgnorePattern: '^_',
            },
        ],
        // `eslint-plugin-import`
        // https://github.com/benmosher/eslint-plugin-import
        'import/order': [
            'error',
            {
                groups: ['external', 'internal'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
        // `eslint-plugin-react`
        // https://github.com/yannickcr/eslint-plugin-react
        'react/prop-types': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
}
