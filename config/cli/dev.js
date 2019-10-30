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
      shell.exec( 'webpack-dev-server --env dev --config config/pages/example.js --color --open' );
      break;
    case 'Iran':
      shell.exec( 'webpack-dev-server --env dev --config config/pages/iran.js --color --open' );
      break;
    case '5G':
      shell.exec( 'webpack-dev-server --env dev --config config/pages/fiveG.js --color --open' );
      break;
    default:
      console.log( 'Sorry, there is no dev build set up for that page.\n' );
  }
} );
