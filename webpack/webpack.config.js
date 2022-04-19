const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = ! isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}
	if (isProd) {
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin(),
		]
	}
	return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				// hmr: isDev, // doen't work
				// reloadAll: true, // doen't work
			},
		},
		"css-loader"
	];

	if (extra) loaders.push(extra);

	return loaders;
}

// Export object
module.exports = {
	// Where files are?
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	// entry: './src/index.js', // entry by string
	entry: {
		// parh if no context defined
		// main: './src/index.js',
		// analytics: './src/analytics.js',
		// Hot replace doen't work with multi entry
		main: ['@babel/polyfill', './index.jsx'], // add polyfill
		analytics: './analytics.ts',
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
		clean: true, // native clean
	},
	// Additional settings
	resolve: {
		// Add default extensions
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@': path.resolve(__dirname, 'src'),
		}
	},
	// Separate big libriaries
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev,
	},
	// devtool: isDev ? 'source-map' : '', // not work ((
	plugins: [
		// Create HTML with plugin
		new HtmlWebpackPlugin({
			// Custom title, doesn't work with template
			// title: 'Lev N Webpack',
			template: './index.html',
			minify: {
				collapseWhitespace: isProd,
			}
		}),
		// new CleanWebpackPlugin(), // clean with plugin
		// Copy any files
		new CopyWebpackPlugin({
			patterns: [
        { 
					from: path.resolve(__dirname, 'src/favicon.ico'), 
					to: path.resolve(__dirname, 'dist'), 
				},
      ],
		}),
		new MiniCssExtractPlugin({
			// Like output: params
			filename: filename('css'),
		}),
		// Analyze plugins
		// new BundleAnalyzerPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader'] // loads from right to left
				// CSS handle with plugin
				// use: [MiniCssExtractPlugin.loader, 'css-loader']
				// CSS handle with plugin extended
				use: cssLoaders(),
			},
			{
				test: /\.less$/,
				use: cssLoaders('less-loader'),
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader'),
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource', // Webpack 5
				// use: ['file-loader'], // Webpack 4
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource', // Webpack 5
			},
			{
				test: /\.xml$/,
				use: ['xml-loader'],
			},
			{
				test: /\.csv$/,
				use: ['csv-loader'],
			},
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
						plugins: [
							// you can add plugin here
						]
          }
        }
      },
			{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
							'@babel/preset-env',
							'@babel/preset-typescript',
						],
          }
        }
      },
			{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						],
          }
        }
      }
		]
	}
}

// i fucked with eslink