const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
	  	rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.svg$/,
				loader: '@svgr/webpack'
			}
		]
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			icons: path.resolve(__dirname, 'src/icons'),
			stores: path.resolve(__dirname, 'src/stores')
		},
		extensions: ['.js', '.jsx']
	}
};