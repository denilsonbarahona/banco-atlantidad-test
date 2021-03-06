const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const DotEnv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test:/\.html$/,
                use:[
                    {loader:'html-loader'}
                ]
            },
            {
                test:/\.css$/i,
                use: [ MiniCssExtractPlugin.loader,
                        'css-loader']
            },{
                test: /\.(woff|woff|eot|ttf|oft)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new DotEnv(),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        port:3006
    }
}
