const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const { buckets, sites } = require( './options' );
const { bucketConversion, nameConversion } = require( './helpers' );

const questions = [
  {
    choices: sites,
    filter: val => {
      return val;
    },
    message: 'Which site would you like to deploy?',
    name: 'site',
    type: 'list'
  },
  {
    choices: buckets,
    filter: val => {
      return val;
    },
    message: 'To which environment would you like to deploy?',
    name: 'bucket',
    type: 'list'
  }
];

inquirer.prompt( questions ).then( answers => {
  const bucket = bucketConversion( answers.bucket );
  const site = nameConversion( answers.site );

  console.log(
    `\nCompiling the ${site} bundles and uploading files to AWS S3 bucket ${bucket}...\n`
  );

  // Run production build
  shell.exec( `webpack --color --config config/init.js --env ${site} --mode production` );

  // Sync S3 bucket
  shell.exec(
    `aws s3 sync ./dist/${site} s3://${bucket}/microsites/${site} --delete --exclude "*.html"`
  );
} );
