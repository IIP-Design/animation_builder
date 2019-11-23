const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const { choices } = require( './options' );

const question = [
  {
    choices,
    filter: val => {
      return val;
    },
    message: 'Which page would you like to test?',
    name: 'page',
    type: 'list'
  }
];

inquirer.prompt( question ).then( answer => {
  console.log( `\nStarting up ${answer.page} dev server...\n` );

  switch ( answer.page ) {
    case 'Example':
      shell.exec(
        'webpack-dev-server --color --config config/init.js --env example --mode development --open'
      );
      break;
    case 'Iran':
      shell.exec(
        'webpack-dev-server --color --config config/init.js --env iran --mode development --open'
      );
      break;
    case '5G':
      shell.exec(
        'webpack-dev-server --color --config config/init.js --env fiveg --mode development --open'
      );
      break;
    default:
      console.log( 'Sorry, there is no dev build set up for that page.\n' );
  }
} );
