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
    plugins: [
        htmlPlugin
    ]
}