const merge = require( 'webpack-merge' );

// Shared configs
const baseConfig = require( '../webpack.common' );
const devConfig = require( '../webpack.dev' );
const prodConfig = require( '../webpack.prod' );
// Project specific configs
const pageConfigs = require( './_configs' );

const dev = merge( baseConfig, devConfig, pageConfigs.example );
const prod = merge( baseConfig, prodConfig, pageConfigs.example );

module.exports = env => {
  if ( env === 'dev' ) {
    return dev;
  }
  return prod;
};
