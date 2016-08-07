/**
 *@Description 开发环境Webpack配置项
 */
var conf = require('./webpack.conf');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var options = {
    devtools: {
        dev: 'dev'
    },
    devtool: "#inline-source-map",
    output: {
        path: './dist/',
        publicPath: '/',
        filename: 'dist/[name].bundle.js'
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     Vue: 'vue'
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/[name].bundle.js'
        }),
        // new HtmlWebpackPlugin({
        //     template: './web/views/common/pages/layout.html',
        //     filename: './views/common/pages/layout.html',
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: './web/views/error/pages/404.html',
        //     filename: './views/error/pages/404.html',
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: './web/views/error/pages/500.html',
        //     filename: './views/error/pages/500.html',
        //     inject: false
        // }),
        new HtmlWebpackPlugin({
            template: './src/views/HomePage/index.js',
            filename: './pages/index.html',

            chunks: ['vendor', 'common', '[HomePage]']
        }),
        new ExtractTextPlugin("assets/styles/[name].css"),
    ]
};
var _options = Object.assign(options, conf.dev);
// for (var i in conf.TemplatePage)
// {
//       _options.plugins.push(
//           new HtmlWebpackPlugin({
//               template: conf.TemplatePage[i],
//               filename: './widget/'+i+'/'+i+'.html',
//               minify: {
//                   collapseWhitespace: true
//               },
//               inject: false
//           })
//       )
// };

module.exports = _options;