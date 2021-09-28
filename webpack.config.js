const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		main: path.resolve(__dirname, "./src/index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
	},
	resolve: {
		extensions: [".js", ".ts"],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		hot: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "index.html" }),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
module: {
	rules: [
		{ 
			test: /\.(t|j)s$/,
			exclude: /node_modules/,
		use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
	   {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
	]
}