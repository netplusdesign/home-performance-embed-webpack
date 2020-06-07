const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['es-us'],
        }),
        new HtmlWebpackPlugin({
            title: 'Embed Test',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'production',
    entry: { 
        index: './src/index.ts',
        data: './src/lib/Data.ts',
        interfaces: './src/lib/interfaces.ts',
        libs: './src/lib/lib.ts',
        helpers: './src/templates/helpers.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.handlebars$/, 
                loader: "handlebars-loader",
                options: {
                    runtime: path.resolve(__dirname, './src/templates/helpers.js'),
                },
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js', '.handlebars' ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};