module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'xo',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'react/display-name': 'off',
		camelcase: 'off',
	},
};
