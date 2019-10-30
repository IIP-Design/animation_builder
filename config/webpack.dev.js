const CopyPlugin = require( 'copy-webpack-plugin' );

const paths = require( './paths' );

module.exports = {
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin( [
      {
        from: paths.appAssets,
        to: `${paths.appDist}/assets`
      }
    ] )
  ]
};
