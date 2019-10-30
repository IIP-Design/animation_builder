const path = require( 'path' );
const fs = require( 'fs' );

const examplePartials = require( '../src/_example/partials' );
const fiveGPartials = require( '../src/_5g/partials' );
const iranPartials = require( '../src/_iran/partials' );

// Gets the root directory for the application
const appDirectory = fs.realpathSync( process.cwd() );

// Fetches the contents of a selected file
function getPartial( pathFromRoot ) {
  return fs.readFileSync( path.join( appDirectory, pathFromRoot ) );
}

// Create an array of html partials to inject into the index.html
const getPartialsArr = partials =>
  Object.keys( partials ).map( val => {
    const p = getPartial( partials[val] );
    return p;
  } );

// Export all partials
module.exports = {
  example: getPartialsArr( examplePartials ),
  fiveG: getPartialsArr( fiveGPartials ),
  iran: getPartialsArr( iranPartials )
};
