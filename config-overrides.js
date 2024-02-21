const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@data': 'src/data',
    '@assets': 'src/assets',
    '@styles': 'src/styles',
    '@lib': 'src/lib',
    '@contexts': 'src/contexts',
    '@hooks': 'src/hooks',
  })(config);

  return config;
};
