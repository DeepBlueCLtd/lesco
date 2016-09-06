const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index.dev'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        }),
        new webpack.ProvidePlugin({
            ReactDOM: 'react-dom',
            React: 'react',
            'window.React': 'react',
            'window.ReactDOM': 'react-dom'
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?retainLines=true'],
            include: path.join(__dirname, 'src')
        },
           {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }, { test: /\.(png|jpg)$/, loader: 'file' } 
            ]
    }
};
