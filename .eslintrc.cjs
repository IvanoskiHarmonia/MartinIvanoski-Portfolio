module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
		tsconfigRootDir: __dirname,
	},
	extends: [
		"eslint:recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "@typescript-eslint"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
};
