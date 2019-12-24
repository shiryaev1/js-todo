const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: './js/script.js',
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'out')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
        test: /\.css$/,
        loader: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
        ],
      },
      ],
    },
    devServer: {
        contentBase: './out'
    },
    plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
  ]
};