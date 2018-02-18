'use strict';

const webpack = require('webpack');
// const config = require('./fixtures/basic/webpack.config.js');
// const config = require('./fixtures/basic/webpack.multi.config.js');
// const config = require('./fixtures/basic/webpack.no-named.config.js');
const config = require('./fixtures/basic/webpack.html.config.js');

const compiler = webpack(config);

compiler.run((errors) => {
  if (errors) {
    console.log(errors); // eslint-disable-line
  }
});
