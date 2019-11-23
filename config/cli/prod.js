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
      shell.exec( 'webpack --color --config config/init.js --env example --mode production' );
      break;
    case 'Iran':
      shell.exec( 'webpack --color --config config/init.js --env iran --mode production' );
      break;
    case '5G':
      shell.exec( 'webpack --color --config config/init.js --env fiveg --mode production' );
      break;
    default:
      console.log( 'Sorry, there is no dev build set up for that page.\n' );
  }
} );
