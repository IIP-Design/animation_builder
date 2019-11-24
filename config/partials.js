const path = require( 'path' );
const fs = require( 'fs' );

const { partials } = require( './sites' );

// Gets the root directory for the application
const appDirectory = fs.realpathSync( process.cwd() );

// Fetches the contents of a selected file
function getPartial( pathFromRoot ) {
  return fs.readFileSync( path.join( appDirectory, pathFromRoot ) );
}

// Create an array of HTML partials to inject into the index.html
const getPartialsArr = parts =>
  Object.keys( parts ).map( val => {
    const p = getPartial( parts[val] );
    return p;
  } );

// Create an object of arrays of HTML partials
const sitePartials = partials.reduce(
  (obj, key) => ({ ...obj, [key.name]: getPartialsArr(require(key.partials)) }), // eslint-disable-line
  {}
);

module.exports = {
  sitePartials
};
