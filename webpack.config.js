var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['webpack-hot-middleware/client', './examples/main.js'],
	output: {
		filename: '[name].bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['less-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
}