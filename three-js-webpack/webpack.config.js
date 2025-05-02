const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/ex-box.js',
  output: {
    path: path.resolve(__dirname, '../src/main/resources/static'),
    filename: 'bundle.js',
  },
  watch:true,
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
}