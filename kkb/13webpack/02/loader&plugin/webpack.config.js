const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

module.exports={
  //mode:'development',
  mode:'production',

  devtool:'source-map',
  
  entry:{
    // 'urlLoader':"./src/urlLoader.js"
    'cssloader':"./src/cssLoader.js"
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
  },
  module:{
    rules:[
      {
        test:/\.(png|jpe?g|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            outputPath:'./images/',
            publicPath:'../dist/images',
            limit:100
          }
        }
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
        //   {
        //   loader:'style-loader',
        //   options:{
        //     insert:'body'
        //   }
        // },
        'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"my app",
      filename:"app.html",
      template:"./html/template.html"
    }),
    new CleanWebpackPlugin,
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ]
}