import path from 'path'
import nodeExternals from 'webpack-node-externals'
import module from './module'
import optimize from './optimize'
import DEV_TOOLS from './devtools'

const serverConfig = (environment) => {
  const devtool = DEV_TOOLS[environment]
  return {
    mode: environment,
    name: 'server',
    devtool,
    entry: [
      './server/srcServer.js',
    ],
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: 'server.min.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: module.getTargetModuleRules('node'),
    },
    optimization: optimize(environment, 'server'),
  }
}

export default serverConfig
