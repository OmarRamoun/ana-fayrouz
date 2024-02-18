const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@styles': 'src/styles',
    '@lib': 'src/lib',
  })(config);

  return config;
};
