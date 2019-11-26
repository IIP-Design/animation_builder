const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const { buckets, sites } = require( './options' );
const { bucketConversion, getDateString, nameConversion } = require( './helpers' );

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
  const s3 = `s3://${bucket}/microsites/${site}`;

  console.log(
    `\nCompiling the ${site} bundles and uploading files to AWS S3 bucket ${bucket}...\n`
  );

  // Run production build
  shell.exec( `webpack --color --config config/init.js --env ${site} --mode production` );

  // Copy previous build into date-based archive directory
  shell.exec( `aws s3 cp ${s3}/live ${s3}/archive/${getDateString()} --recursive` );

  // Sync live S3 bucket
  shell.exec(
    `aws s3 sync ./dist/${site} ${s3}/live --delete --exclude "*.html" --exclude "*.gitkeep"`
  );
} );
