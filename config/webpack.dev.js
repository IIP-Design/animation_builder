const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.common' );

module.exports = merge( baseConfig, {
  devServer: {
    contentBase: './dist',
    port: 4321
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  }
} );
