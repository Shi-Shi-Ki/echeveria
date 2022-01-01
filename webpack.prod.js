const common = require('./webpack.common.js');

module.exports = function(options, webpack) {
  return {
    ...common,
    mode: 'production',
  };
};
