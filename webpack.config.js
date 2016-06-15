'use strict';

var path = require('path');

module.exports = {
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'src',
            'node_modules'
        ]
    },
    module: {
        preLoaders: [
            { test: /jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.html$/, loader: 'raw-loader' },
            {
                loader: 'babel-loader',
                test: /jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [ 'transform-object-rest-spread' ]
                }
            }
        ]
    },
    plugins: {},
    entry: {
        app: "src/app.jsx"
    },
    output: {
        path: path.join(__dirname, "_site/js"),
        filename: '[name].js'
    },
    eslint: {
        failOnWarning: true,
        failOnError: true
    }
};
