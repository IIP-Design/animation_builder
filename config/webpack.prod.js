const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const merge = require( 'webpack-merge' );

const baseConfig = require( './webpack.common' );

module.exports = merge( baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: '[name].css'
    } )
  ]
} );
