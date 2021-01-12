
export default {
  db: 'mongodb://db:27017/eth',
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: options.autoIndex,
      autoReconnect: true,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000
    }
  },
  jwtSecret: 'adb12332'
}
