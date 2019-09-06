const path = require('path');

const paths = {
  angular: path.resolve(path.join(__dirname, '../../node_modules', 'angular')),
  dist: path.join(__dirname, '../../', '/dist'),
  root: path.join(__dirname, '../..'),
  demo: path.join(__dirname, '../../', '/demo'),
  source: path.join(__dirname, '../../', '/src'),
  test: path.join(__dirname, '../../', '/test')
};

module.exports = paths;
