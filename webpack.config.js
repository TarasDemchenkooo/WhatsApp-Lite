const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const production = process.env.NODE_ENV === 'production'

module.exports = {
    entry: { app: path.resolve(__dirname, './src/index.js') },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: production ? '[name].[contenthash].js' : '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'WhatsApp Web App',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contentbash].css' : '[name].css'
        })
    ],
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
    mode: production ? 'production' : 'development'
};