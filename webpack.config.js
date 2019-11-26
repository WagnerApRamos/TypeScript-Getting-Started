module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules :[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /module_nodes/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};
