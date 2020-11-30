/**
 * Load app config
 */
import defaults from './env'

const env = process.env.NODE_ENV || 'development'
let config

switch (env) {
  case 'production':
    config = require('./env/production/index').default
    break
  case 'test':
    config = require('./env/test/test').default
    break
  default:
    config = require('./env/development/index').default
    break
}

export default Object.assign(defaults, config)
