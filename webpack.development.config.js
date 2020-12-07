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
        filename: '[name].bundle.js', //name -> main, as specified on entry obj
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
                    'style-loader',
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
        // template for index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            favicon: './src/images/favicon.png',
            title: 'Your next amazing project',
            editMe: 'src/index.html',
        }),
    ],
    // Development server settings
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080,
    },
};
