const { options } = require( '../sites' );

// Selects bucket name based on user's environment selection
const bucketConversion = bucket => {
  if ( bucket === 'Local' ) {
    return 'iip-design-local-dev-modules';
  }

  if ( bucket === 'Dev' ) {
    return 'iip-design-dev-modules';
  }

  if ( bucket === 'Stage' ) {
    return 'iip-design-stage-modules';
  }

  if ( bucket === 'Prod' ) {
    return 'iipdesignmodules.america.gov';
  }
};

// Converts user's site selection to a config name used throughout by Webpack
const nameConversion = name => {
  const configName = options.filter( option => option.option === name )[0].name;

  return configName;
};

module.exports = {
  bucketConversion,
  nameConversion
};
