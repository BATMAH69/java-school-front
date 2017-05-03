module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer:{
    inline: true,
    port:3333
  },
  module:{
    loaders:[
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      {
        test: /\.s?css$/,
        loaders: [
          'style?sourceMap',
          'typings-for-css-modules?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]&namedExport&camelCase',
        ],
      },
    ]
  }
};