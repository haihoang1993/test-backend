import config from '../configs'
const env = process.env

function isProduction() {
  return process.env.NODE_ENV === config.env.production
}

function isDevelopment() {
  return process.env.NODE_ENV === config.env.development
}

export default {
  isDevelopment,
  isProduction,
  ...env
}
