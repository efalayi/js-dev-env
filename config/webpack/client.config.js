import path from 'path'
import module from './module'
import webpackPlugins from './plugins'
import DEV_TOOLS from './devtools'
import optimize from './optimize'

const clientConfig = (environment) => {
  const devtool = DEV_TOOLS[environment]
  return {
    mode: environment,
    name: 'client',
    devtool,
    entry: {
      index: './client/index.js',
    },
    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: '[name].min.js',
    },
    target: 'web',
    module: {
      rules: module.getTargetModuleRules('web'),
    },
    optimization: optimize(environment, 'client'),
    plugins: webpackPlugins.client,
  }
}

export default clientConfig
