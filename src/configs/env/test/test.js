export default {
  db: 'mongodb://localhost/axionr',
  dbOptions: {
    useMongoClient: true,
    native_parser: true,
    autoReconnect: true,
    keepAlive: 1,
    connectTimeoutMS: 300000,
    socketTimeoutMS: 300000
  },

  port: 5011,
  jwtSecret: 'adb12332'
}
