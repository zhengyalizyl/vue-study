const path=require('path');
const HtmlWbpackPlugin=require('html-webpack-plugin');
module.exports ={
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  entry:{
    app:path.resolve(__dirname,'./src/index.js')
  },
  output:{
    filename:'js/[name].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
          {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
              loader:'babel-loader',
              options:{
                presets:['@babel/preset-env'],
              }
            }
          },{
            test:/\.css$/,
            use:['style-loader','css-loader']
          },{
            test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader:'url-loader',
            options:{
              limit:1000,
              name:'static/img/[name].[ext]'
            }
          }
    ]
  },
  plugins:[
    new HtmlWbpackPlugin({
      template:'index.html',
      filename:'index.html'
    })
  ],
  devServer:{
    hot:true,

  }
}