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
  	port: 8081,
    //当我们的每次请求都会被devserver拦截，然后如果请求的url满足proxy中的某个规则的话，则把这个请求转发到另一个服务器上
    //开启热更新
    hot:true,

    hotOnly:true,
    proxy:{
      '/api':{
        target:'http://localhost:8888',
        //把请求路径中的/api去掉
        pathRewrite:{
          '^/api/':''
        }
      }
    }
	}
}