const siteData = [
  {
    index: 'src/_example/index.js',
    name: 'example',
    option: 'Example',
    partials: '../src/_example/partials'
  },
  {
    index: 'src/_5g/index.js',
    name: 'fiveg',
    option: '5G',
    partials: '../src/_5g/partials'
  },
  {
    index: 'src/_covid/index.js',
    name: 'covid',
    option: 'COVID',
    partials: '../src/_covid/partials'
  },
  {
    index: 'src/_iran/index.js',
    name: 'iran',
    option: 'Iran',
    partials: '../src/_iran/partials'
  }
];

module.exports = {
  indices: siteData.map( site => ( { name: site.name, index: site.index } ) ),
  options: siteData.map( site => ( { name: site.name, option: site.option } ) ),
  partials: siteData.map( site => ( { name: site.name, partials: site.partials } ) ),
  sites: siteData.map( site => site.option )
};
