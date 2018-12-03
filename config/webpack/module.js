
const defaultModuleRules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        rootMode: 'upward',
      },
    },
  },
]

const webModuleRules = [
  {
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    },
  },
  {
    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
    use: {
      loader: 'file-loader',
      options: {
        emitFile: false,
      },
    },
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          bypassOnDebug: true,
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
]

const getTargetModuleRules = (targetName) => {
  if (targetName === 'web') {
    return [...defaultModuleRules, ...webModuleRules]
  }
  return defaultModuleRules
}

export default {
  getTargetModuleRules,
}
