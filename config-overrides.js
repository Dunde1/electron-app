const path = require('path');

module.exports = (config, _env) => {
  config.resolve.alias = {
    '@src': path.resolve(__dirname, 'src/')
  }

  return config;
};
