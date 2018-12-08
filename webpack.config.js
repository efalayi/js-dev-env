
import dotenv from 'dotenv'
import clientConfig from './config/webpack/client.config'
import serverConfig from './config/webpack/server.config'

dotenv.config()

const environment = process.env.NODE_ENV

export default [serverConfig(environment), clientConfig(environment)]
