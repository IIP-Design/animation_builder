const merge = require( 'webpack-merge' );

// Shared configs
const devConfig = require( './webpack.dev' );
const prodConfig = require( './webpack.prod' );

module.exports = ( env, argv ) => {
  // Pass environment name to webpack config
  const baseConfig = require( './webpack.common' )( env ); // eslint-disable-line global-require

  if ( argv.mode === 'development' ) {
    return merge( baseConfig, devConfig );
  }

  return merge( baseConfig, prodConfig );
};
