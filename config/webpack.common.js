const CopyPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const partials = require( './partials' );
const paths = require( './paths' );

module.exports = site => {
  const sitePartial = partials.sitePartials[site].join( '' );

  const config = {
    entry: {
      [site]: paths.siteIndices[site]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  '@babel/plugin-proposal-optional-chaining',
                  'babel-plugin-transform-class-properties'
                ]
              }
            },
            'eslint-loader'
          ]
        }
      ]
    },
    output: {
      filename: `${site}.js`,
      path: `${paths.appDist}/${site}`
    },
    plugins: [
      new CopyPlugin( [
        {
          from: `${paths.appAssets}/${site}`,
          to: './assets'
        }
      ] ),
      new HtmlWebpackPlugin( {
        partials: sitePartial,
        template: paths.appHTML
      } ),
      new HtmlWebpackPlugin( {
        chunks: [],
        filename: 'justThe.html',
        partials: sitePartial,
        template: paths.justTheHTML
      } )
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  };

  return config;
};
