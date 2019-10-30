const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const { choices } = require( './options' );

const question = [
  {
    choices,
    filter: val => {
      return val;
    },
    message: 'Which page would you like to build?',
    name: 'page',
    type: 'list'
  }
];

inquirer.prompt( question ).then( answer => {
  console.log( `\nCompiling the ${answer.page} bundles...\n` );

  switch ( answer.page ) {
    case 'Example':
      shell.exec( 'webpack --env prod --config config/pages/example.js --color' );
      break;
    case 'Iran':
      shell.exec( 'webpack --env prod --config config/pages/iran.js --color' );
      break;
    case '5G':
      shell.exec( 'webpack --env prod --config config/pages/fiveG.js --color' );
      break;
    default:
      console.log( 'Sorry, there is no dev build set up for that page.\n' );
  }
} );
