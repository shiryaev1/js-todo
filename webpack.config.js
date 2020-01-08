const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: './js/script.js',
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'bundle')
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
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            'css-loader'
        ]
        },
      ],
    },
    devServer: {
        contentBase: './bundle'
    },
    plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ]
};