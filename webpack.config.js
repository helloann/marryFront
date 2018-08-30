// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const webpack = require('webpack')
// const StyleLintPlugin = require('stylelint-webpack-plugin');

// module.exports = {
//     entry: {
//         app: './src/index.js',
//     },
//     devtool: 'inline-source-map', //err会映射到具体文件
//     devServer: {
//         contentBase: './dist', //提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
//         hot: true
//     },
//     plugins: [
//         new CleanWebpackPlugin(['dist']), //清掉dist文件，再根据具体的依赖构建包
//         new HtmlWebpackPlugin({//动态生成index.html文件
//             title: 'output'
//         }),
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new StyleLintPlugin({
//             "extends": "stylelint-config-standard",
//         })
//     ],
//     output: {
//         filename: '[name].bundle.js',//多个入口的输出，会生成app.bundle.js 、print.js
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif|jpeg)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             },
//             {
//                 test: /\.js?$/,
//                 loader: 'babel-loader',
//                 exclude: file => (
//                     /node_modules/.test(file) &&
//                     !/\.vue\.js/.test(file)
//                 )
//             },
//             {
//                 enforce: 'pre',
//                 test: /\.(js|vue)$/,
//                 loader: 'eslint-loader',
//                 exclude: /node_modules/
//               }
//         ]
//     }
// };