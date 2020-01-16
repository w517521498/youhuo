const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/script/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script/bundle.js"
    },
   //引入loader
   module: {
    rules: [{
            //加载jquery
            test: require.resolve('jquery'),
            use: [{
                    loader: 'expose-loader',
                    options: '$'
                },
                {
                    loader: 'expose-loader',
                    options: 'jQuery'
                }
            ]
        },
        { //加载css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        { //配置图片文件的包
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]'
            }
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        title: '淘宝购物车',
        filename: "index1.html",
        template: "./src/index1.html",
        chunks: ["index1", "vendor"],
        minify: { //压缩html
            removeComment: true, //去掉注释
            collapseWhitespace: true //去掉空格。
        }
    }),
    new HtmlWebpackPlugin({
        title: '淘宝购物车详情页',
        filename: "details.html",
        template: "./src/details.html",
        chunks: ["details", "vendor"],
        minify: { //压缩html
            removeComment: true, //去掉注释
            collapseWhitespace: true //去掉空格。
        }
    }),
    new HtmlWebpackPlugin({
        title: '淘宝购物车展示列表',
        filename: "cartlist.html",
        template: "./src/cartlist.html",
        chunks: ["cartlist", "vendor"],
        minify: { //压缩html
            removeComment: true, //去掉注释
            collapseWhitespace: true //去掉空格。
        }
    })
]

};