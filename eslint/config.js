module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2018,
		"ecmaFeatures": {
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react-hooks",
		"@typescript-eslint"
	],
	"extends": [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"rules": {
		"accessor-pairs": [ 'warn' ],
		"array-bracket-spacing": [ 'error', 'always' ],
		"array-bracket-newline": [ "warn", "never" ],
		"array-element-newline": [ "warn", { "ArrayExpression": "consistent", "ArrayPattern": { "minItems": 3 } } ],
		"array-callback-return": [ "error", { "allowImplicit": true }, { "checkForEach": true }, ],
		"arrow-parens": [ "warn", "as-needed" ],
		"arrow-spacing": [ "error", { "before": true, "after": true } ],
		"arrow-body-style": [ "warn", "as-needed" ],

		"block-spacing": [ "error", "always" ],
		"block-scoped-var": "warn",
		"brace-style": "error",

		"capitalized-comments": [ "error", "always" ],
		"comma-dangle": [ "warn", "never" ],
		"comma-style": [ "warn", "last" ],
		"comma-spacing": [ "warn", { "before": false, "after": true } ],
		"consistent-return": "error",
		"computed-property-spacing": [ "error", "always" ],
		"curly": "error",

		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": [ "error", { "allowKeywords": false } ],

		"eqeqeq": [ "error", "always" ],
		"eol-last": [ "error", "always" ],

		"func-style": [ "error", "declaration" ],
		"func-call-spacing": [ "warn", "never" ],
		"func-names": [ "warn", "as-needed" ],
		"function-call-argument-newline": [ "error", "never" ],
		"function-paren-newline": [ "error", "never" ],

		"generator-star-spacing": [ "error", { "before": false, "after": false } ],
		"guard-for-in": "error",

		"key-spacing": [ "error", { "beforeColon": false, "afterColon": true, "on": "colon" } ],

		"lines-around-comment": [ "error", { "beforeBlockComment": true } ],

		"implicit-arrow-linebreak": [ "error", "beside" ],

		"jsx-quotes": [ "error", "prefer-single" ],

		"keyword-spacing": [ "error", { "before": true, "after": true } ],

		"linebreak-style": [ "error", "windows" ],
		"lines-between-class-members": [ "error", "always" ],

		"max-classes-per-file": [ "error", 1 ],
		"max-depth": [ "error", 5 ],
		"max-nested-callbacks": [ "error", 4 ],
		"multiline-comment-style": [ "error", "starred-block" ],
		"multiline-ternary": [ "warn", "never"],

		"semi": [ "warn", "never" ],
		"object-curly-spacing": [ "warn", "always" ],
		"@typescript-eslint/array-type": [ "error", {
			"default": "generic"
		} ],
		"@typescript-eslint/ban-types" : [ "off" ],
		"indent": [ "warn", "tab" ],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	},
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect"
		}
	}
}
