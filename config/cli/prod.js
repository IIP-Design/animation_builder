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
    message: 'Which page would you like to build?',
    name: 'site',
    type: 'list'
  }
];

inquirer.prompt( question ).then( answer => {
  const site = nameConversion( answer.site );

  console.log( `\nCompiling the ${site} bundles...\n` );

  shell.exec( `webpack --color --config config/init.js --env ${site} --mode production` );
} );
