import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'

const client = [
  new Dotenv(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../client/index.html'),
    filename: 'index.html',
    inject: true,
    showErrors: true,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
    },
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
]

const server = []

export default {
  client,
  server,
}
