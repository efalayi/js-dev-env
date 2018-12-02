import path from 'path'
import nodeExternals from 'webpack-node-externals'
import module from './config/webpack/module'

const devtool = 'cheap-source-map'
const mode = 'development'

export default [
  {
    mode,
    name: 'server',
    devtool,
    entry: [
      '@babel/polyfill',
      './server/srcServer.js',
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.min.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: module.getTargetModuleRules('node'),
    },
  },
  {
    mode,
    name: 'client',
    devtool,
    entry: [
      '@babel/polyfill',
      './client/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.min.js',
    },
    target: 'web',
    module: {
      rules: module.getTargetModuleRules('web'),
    },
  },
]
