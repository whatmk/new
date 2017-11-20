var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV
var compress = process.env.COMPRESS
var plugins = []


var projectRootPath = path.resolve(__dirname, './');

//node环境变量，生产环境：production，开发环境：development
plugins.push(new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env)
}))

//代码丑化
if (env === 'production' && compress) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    )
}

plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor'))

plugins.push(new HtmlWebpackPlugin({
    filename: './index.html', //生成的html存放路径，相对于 path
    favicon: './assets/img/favicon.png', //favicon路径
    template: './index.html', //html模板路径
    inject: true, //允许插件修改哪些内容，包括head与body`
}))

module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: ["./index.js", "./assets/styles/index.less"],
        vendor: ["react", 'react-dom', 'mk-meta-engine', 'mk-utils', 'moment']
    },

    output: {
        path: path.join(__dirname, "/dist/"),
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].chunk.js'
    },

    resolve: {
        extensions: [".js"],
        alias: {
            'mk-component': path.resolve(projectRootPath, './component/index.js')
        }
    },

    module: {
        rules: [{
            test: /\.css$/,
            //exclude: /node_modules/,

            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    limit: 8192
                }
            }
        }],
    },
    devServer: {
        contentBase: './dist/',
        proxy: {
            // '/v1/*': 'http://127.0.0.1:8000/'
            '/v1/*': 'http://debug.rrtimes.com:8087/'
        }
    },
    plugins: plugins
}