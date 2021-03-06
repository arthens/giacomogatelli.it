const path =require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

module.exports = {
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        unsafeCache: true
    },
    module: {
        // preLoaders: [
        //     { test: /jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        // ],
        loaders: [
            {
                test: /\.md/,
                loader: 'raw-loader'
            },
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
    plugins: [
        new StaticSiteGeneratorPlugin('js/app.js', [
            '/',
            '/curriculum.html',
            '/contact.html',
            '/it/',
            '/it/curriculum.html',
            '/it/contact.html',
            '/404.html'
        ])
    ],
    entry: {
        "js/app.js": "./src/app.jsx"
    },
    output: {
        path: path.join(__dirname, "_site/"),
        filename: '[name]',
        libraryTarget: 'umd'
    },
    eslint: {
        failOnWarning: true,
        failOnError: true
    }
};
