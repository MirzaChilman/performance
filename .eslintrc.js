module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
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
		camelcase: 'off',
	},
};
