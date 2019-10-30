const paths = require( './paths' );

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  output: {
    path: paths.appDist
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
