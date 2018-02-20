// source: github.com/tylermcginnis/rrssr

var path = require('path')
var webpack = require('webpack')
var nodeExternarls= require('webpack-node-externals')

var browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules:[
            { test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "true"
            })
    ]
    
}

var serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternarls()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules:[
            { test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "false"
            })

    ]
}

module.exports= [ browserConfig, serverConfig]