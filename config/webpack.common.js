const CopyPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const partials = require( './partials' );
const paths = require( './paths' );

module.exports = {
  entry: paths.appIndex,
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
    path: paths.appDist,
    filename: 'gcx-animations.js'
  },
  plugins: [
    new CopyPlugin( [
      {
        from: paths.appAssets,
        to: `${paths.appDist}/assets`
      }
    ] ),
    new HtmlWebpackPlugin( {
      favicon: paths.appFavicon,
      partials: [partials.all],
      template: paths.appHTML
    } )
  ],
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  }
};
