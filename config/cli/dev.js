const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const { sites } = require( './options' );
const { nameConversion } = require( './helpers' );

const question = [
  {
    choices: sites,
    filter: val => {
      return val;
    },
    message: 'Which page would you like to test?',
    name: 'site',
    type: 'list'
  }
];

inquirer.prompt( question ).then( answer => {
  const site = nameConversion( answer.site );

  console.log( `\nStarting up ${site} dev server...\n` );

  shell.exec(
    `webpack-dev-server --color --config config/init.js --env ${site} --mode development --open`
  );
} );
