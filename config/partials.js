const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the application
const appDirectory = fs.realpathSync( process.cwd() );

// Fetches the contents of a selected file
function getPartial( pathFromRoot ) {
  return fs.readFileSync( path.join( appDirectory, pathFromRoot ) );
}

// Use getPartial function and path to component
const example = getPartial( '/src/example/example.html' );

// Export all partials
module.exports = {
  all: [example]
};
