const {resolve} = require('path')
const {extract} = require('extract-text-webpack-plugin')


module.exports = (env = {}) => {
    const isProduction = env.production ? true : false
    const port = 3000

    return {
        entry: {build: ['./source/main.js', './source/main.css']},

        output: {
            path: resolve(__dirname, './distribution/'),
            publicPath: '/',
            filename: isProduction ? '[name].[chunkhash].js' : 'dev-build.js'
        },

        module: {
            rules: [
                {loader: 'vue-loader', test: /\.vue$/},
                {loader: 'file-loader', test: /\.(png|jpg|gif|svg)$/},
                {loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/},

                {test: /\.css$/, use: (() => {
                    const loaders = ['css-loader']

                    if (isProduction) return extract({use: loaders})
                    else return ['style-loader'].concat(loaders)
                })()}
            ]
        },

        plugins: (() => {
            if (isProduction) return [
                new (require('clean-webpack-plugin'))(['./distribution/']),
                new (require('copy-webpack-plugin'))([{from: './static/'}]),
                new (require('extract-text-webpack-plugin'))('build.[contenthash].css'),
                new (require('html-webpack-plugin'))({
                    inject: true, template: './source/index.html',
                    minify: {removeScriptTypeAttributes: true, collapseWhitespace: true}
                }),
                new (require('webpack')).optimize.UglifyJsPlugin(),
                new (require('webpack')).optimize.ModuleConcatenationPlugin(),
                new (require('webpack')).IgnorePlugin(/^\.\/locale$/, /moment$/)
            ]

            if (!isProduction) return [
                new (require('copy-webpack-plugin'))([{from: './static/'}]),
                new (require('html-webpack-plugin'))({
                    inject: true, template: './source/index.html'
                })
            ]
        })(),

        resolve: {
            modules: [
                './source/',
                './node_modules/'
            ]
        },

        devServer: {
            historyApiFallback: true,
            noInfo: true, clientLogLevel: 'error',
            host: '0.0.0.0', port, disableHostCheck: true
        },

        devtool: false
    }
}
