const paths = require( './paths' );

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-optional-chaining',
                'babel-plugin-transform-class-properties'
              ]
            }
          },
          'eslint-loader'
        ]
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
