import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from "eslint-webpack-plugin"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

const config: webpack.Configuration = {
	mode: "development",
	output: {
		publicPath: "/",
	},
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					{
						loader: "css-loader",
						options: {
							modules: {
								// compileType: "module",
								mode: "local",
								// auto: true,
								// exportGlobals: true,
								localIdentName: "[path][name]__[local]--[hash:base64:5]",
								// localIdentContext: path.resolve(__dirname, "src"),
								// localIdentHashPrefix: "my-custom-hash",
								// namedExport: true,
								exportLocalsConvention: "camelCase",
								// exportOnlyLocals: false,
							}
						}
					},
					// "css-loader?modules=true&sourceMap=true",
					// Compiles Sass to CSS
					"sass-loader",
				]
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false
		}),
		new ESLintPlugin({
			extensions: ["js", "jsx", "ts", "tsx"],
		}),
	],
	devtool: "inline-source-map"
}

export default config
