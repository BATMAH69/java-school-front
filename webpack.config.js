module.exports = {
  entry: './src/main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer:{
    inline: true,
    port:3333
  },
  module:{
    rules:[
      {test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
};