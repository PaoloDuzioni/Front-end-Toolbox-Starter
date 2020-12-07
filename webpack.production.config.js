const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // Entry Point
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },

    // Output where the bundle file will resolve
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.min.js', //name -> main, as specified on entry obj
    },

    // Loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    // Plugins
    plugins: [
        // Clean / remove old data on build
        new CleanWebpackPlugin(),
        // template for index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            favicon: './src/images/favicon.png',
        }),
        // Extract CSS in a link tag for prod build
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
    ],
};
