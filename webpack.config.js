// webpack.config.js
let path = require('path');
let webpack = require('webpack');
console.log(__dirname);
module.exports = {
    entry: {
        index: path.join(__dirname, '/index')
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, '/build')
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    }
};