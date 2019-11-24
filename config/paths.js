const path = require( 'path' );
const fs = require( 'fs' );

const { indices } = require( './sites' );

// Gets the root directory for the application
const appDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the application root
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

const siteIndices = indices.reduce(
  ( obj, key ) => ( { ...obj, [key.name]: resolveApp( key.index ) } ),
  {}
);

module.exports = {
  appAssets: resolveApp( 'static/assets' ),
  appDist: resolveApp( 'dist' ),
  appFavicon: resolveApp( 'static/favicon.png' ),
  appHTML: resolveApp( 'static/index.html' ),
  appPackage: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' ),
  justTheHTML: resolveApp( 'static/html.html' ),
  siteIndices
};
