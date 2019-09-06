const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/boot.ts'
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            }
        ]
    },
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new UglifyJsPlugin({}),
        new HtmlWebpackPlugin({
            template: 'config/index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
    ]
};