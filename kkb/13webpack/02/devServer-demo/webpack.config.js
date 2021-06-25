const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports={
  mode:'production',
  devtool:'source-map',
  entry:{
    'index':"./src/index.js"
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"my app",
      filename:"index.html",
      template:"./src/html/template.html"
    }),
    new CleanWebpackPlugin
  ],
  devServer: {
  	// 生成的虚拟目录路径
  	contentBase: "./dist",
  	// 自动开启浏览器
  	open: true,
  	// 端口
  	port: 8081
	}
}