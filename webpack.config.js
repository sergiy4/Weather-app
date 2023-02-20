const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },

  devServer:{
    static:'./dist',
    watchFiles:['./src/template.html'],
    hot:true
   
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
          test:/\.(png|svg|jpg|jpeg|gif)$/,
          type:'asset/resource'
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
        }

    ]
  },
  plugins: [
   
    new HtmlWebpackPlugin({
      title: 'Development',
      
      template:'./src/template.html'
    }),
  ],

  

};

