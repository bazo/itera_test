/* eslint-env node */
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier", "jest", "eslint-plugin-simple-import-sort", "import"],
	settings: {
		react: {
			version: "17",
		},
	},
	rules: {
		"simple-import-sort/imports": "error",
		"sort-imports": "off",
		"import/order": "off",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"no-console": "warn",
		"no-undef": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/prop-types": "off",
	},
	ignorePatterns: ["jest.config.js"],
};
