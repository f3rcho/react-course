const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config();

// development condition
const isDev = (process.env.ENV === 'development');
// entry for productioin mode
const entry = ['./src/frontend/index.js'];
// entry for development mode
if (isDev) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000$reload=true')
};


module.exports = {
    entry,
    mode: process.env.ENV,
    output: {
        path: path.resolve(__dirname, 'src/server/public'),
        filename: 'assets/app.js',
        publicPath:'/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|git|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : ()=> {},
        isDev ? () => {} :
        new CompressionWebpackPlugin({
            test:/\.js$|\.css$/,
            filename: '[path].gz',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/app.css'
        }),
    ]
}