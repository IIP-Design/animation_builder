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
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  output: {
    path: paths.appDist,
    filename: 'gcx-animations.js'
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: paths.appHTML,
      partials: [partials.all]
    } )
  ],
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  }
};
