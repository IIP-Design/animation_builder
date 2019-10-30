const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const partials = require( '../partials' );
const paths = require( '../paths' );

const examplePartials = partials.example.join( '' );
const fiveGPartials = partials.fiveG.join( '' );
const iranPartials = partials.iran.join( '' );

module.exports = {
  fiveG: {
    entry: {
      fiveG: paths.fiveGIndex
    },
    output: {
      filename: 'fiveG-animations.js'
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
      filename: 'iran-animations.js'
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
      filename: 'example-animations.js'
    },
    plugins: [
      new HtmlWebpackPlugin( {
        partials: examplePartials,
        template: paths.appHTML
      } )
    ]
  }
};
