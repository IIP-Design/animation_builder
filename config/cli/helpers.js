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

// Returns a string based on the current date in the format: YYYYMMDDHHMM
const getDateString = () => {
  const now = new Date( Date.now() );

  const year = now.getFullYear();

  let month = now.getMonth() + 1;
  if ( month < 10 ) {
    month = `0${month}`;
  }

  let day = now.getDate();
  if ( day < 10 ) {
    day = `0${day}`;
  }

  let hour = now.getHours();
  if ( hour < 10 ) {
    hour = `0${hour}`;
  }

  let minute = now.getMinutes();
  if ( minute < 10 ) {
    minute = `0${minute}`;
  }

  return `${year}-${month}-${day}-${hour}${minute}`;
};

module.exports = {
  bucketConversion,
  getDateString,
  nameConversion
};
