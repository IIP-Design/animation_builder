const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const partials = require( '../partials' );
const paths = require( '../paths' );

const examplePartials = partials.example.join( '' );
const fiveGPartials = partials.fiveG.join( '' );
const iranPartials = partials.iran.join( '' );

module.exports = {
  fiveg: {
    entry: {
      fiveg: paths.fiveGIndex
    },
    output: {
      filename: 'fiveg.js',
      path: `${paths.appDist}/fiveg`
    },
    plugins: [
      new HtmlWebpackPlugin( {
        partials: fiveGPartials,
        template: paths.appHTML
      } )
    ]
  },
  iran: {
    entry: {
      iran: paths.iranIndex
    },
    output: {
      filename: 'iran.js',
      path: `${paths.appDist}/iran`
    },
    plugins: [
      new HtmlWebpackPlugin( {
        partials: iranPartials,
        template: paths.appHTML
      } )
    ]
  },
  example: {
    entry: {
      example: paths.exampleIndex
    },
    output: {
      filename: 'example.js',
      path: `${paths.appDist}/example`
    },
    plugins: [
      new HtmlWebpackPlugin( {
        partials: examplePartials,
        template: paths.appHTML
      } )
    ]
  }
};
