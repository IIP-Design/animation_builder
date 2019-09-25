const merge = require( 'webpack-merge' );
const baseConfig = require( './webpack.common' );

module.exports = merge( baseConfig, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 4321
  }
} );
