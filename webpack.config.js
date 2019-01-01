// 这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
    entry: [
        './app/index.js',
    ],
    // output 是放入产生出来的结果的相关参数
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
            // exclude: /node_modules/
        }]
    },
    devServer: {
        port: 8089,
    },
    plugins:[
        HTMLWebpackPluginConfig
    ]
};