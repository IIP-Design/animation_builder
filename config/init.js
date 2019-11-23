const merge = require( 'webpack-merge' );

// Shared configs
const devConfig = require( './webpack.dev' );
const prodConfig = require( './webpack.prod' );

// Pass environment name to webpack config
const exampleConfig = require( './webpack.common' )( 'example' );
const fivegConfig = require( './webpack.common' )( 'fiveg' );
const iranConfig = require( './webpack.common' )( 'iran' );

module.exports = ( env, argv ) => {
  let baseConfig;

  if ( env === 'example' ) {
    baseConfig = exampleConfig;
  } else if ( env === 'fiveg' ) {
    baseConfig = fivegConfig;
  } else if ( env === 'iran' ) {
    baseConfig = iranConfig;
  } else {
    console.log( 'No configuration available for that site.' );
  }

  if ( argv.mode === 'development' ) {
    return merge( baseConfig, devConfig );
  }

  return merge( baseConfig, prodConfig );
};
