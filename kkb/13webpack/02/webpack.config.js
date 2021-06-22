const path = require('path')

module.exports={
  mode:'development',
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
        use:[{
          loader:'style-loader',
          options:{
            insert:'body'
          }
        },'css-loader']
      }
    ]
  }
}