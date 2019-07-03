//这是node 提供的一些路劲模块
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入内存中 自动生成index页面的插件

//创建 插件对象
const htmlPlugin = new HtmlWebPackPlugin({
    template : path.join(__dirname , './src/index.html'),// __dirname是该文件的所处目录为根目录，第二参数为拼接的目录文件
    filename : 'index.html' //生成内存中首页文件的文件名
})

//向外暴露一个打包的配置对象，
module.exports = {
    mode:'development', // development 、production
    //在webpack 4.x中，最大一个特性就是 约定优于配置，默认打包的入口路径是 src->index.js
    //webpack打包只能打.js后缀的文件，像其他后缀的文件 .png .vue无法主动处理，需要第三方的loader
    plugins: [
        htmlPlugin
    ],
    module: { //所有第三方 模块的配置规则
        rules: [// 第三方匹配规则
            {
                test: /\.js|jsx$/ , use:'babel-loader' , exclude: /node_modules/
            },//千万不要忘记添加exclude否则会打包失败
            {
                test:/\.css$/, use:['style-loader','css-loader']//打包处理css样式表的 第三方Loader
            },{
                test:/\.ttf|woff|woff2|eot|svg$/ ,use:'url-loader'//打包处理bootstrap的文件,字体文件的loader
            },
            {
                test:/\.scss$/, use:['style-loader','css-loader?modules','sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],//表示 这几个文件后缀名可以不写
        alias: {//表示别名
            '@':path.join(__dirname , './src')//这样@就表示src目录路径了
        }
    }
}