const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[sha512:hash:base64:7].[ext]',
            outputPath: 'imgs',
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // inline files should be smaller than 10 kb
            limit: 10 * 1024,
            name: '[name]_[sha512:hash:base64:7].[ext]',
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.(ico)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      },
    ],
  },
};
