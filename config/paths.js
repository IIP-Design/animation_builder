const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the application
const appDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the application root
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  appAssets: resolveApp( 'static/assets' ),
  appDist: resolveApp( 'dist' ),
  appFavicon: resolveApp( 'static/favicon.png' ),
  appHTML: resolveApp( 'static/index.html' ),
  appPackage: resolveApp( 'package.json' ),
  appSrc: resolveApp( 'src' ),
  exampleIndex: resolveApp( 'src/_example/index.js' ),
  fivegIndex: resolveApp( 'src/_5g/index.js' ),
  iranIndex: resolveApp( 'src/_iran/index.js' ),
  justTheHTML: resolveApp( 'static/html.html' )
};
