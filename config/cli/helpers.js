module.exports = {
  bucketConversion: bucket => {
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
  },
  nameConversion: name => {
    if ( name === '5G' ) {
      return 'fiveg';
    }

    return name.toLowerCase();
  }
};
