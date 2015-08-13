var bower_components = __dirname + '/app/bower_components';

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: [ 'webpack/hot/dev-server', './main.js' ]
  },
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname + '/app/modules'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'eslint' },
    ],
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
