const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: {
        main:path.join(__dirname,'src/main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        // 相当于脚本里 --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 1213,
        hot: true,
        // 配置代理
        proxy:{
            "/api":{
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true,
                // 通过这个属性配置，去掉/resful
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    //配置捷径路径
    resolve:{
        alias:{

        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(JPG|jpg|png|gif|bmp|svg)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["import", {
                                "libraryName": "vant",
                                "libraryDirectory": "es",
                                "style": true
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};