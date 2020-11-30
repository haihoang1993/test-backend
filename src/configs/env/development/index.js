const defaultHost = process.env.DB_HOST ? process.env.DB_HOST : "db";

export default {
  db: `mongodb://${defaultHost}:27017/backlink-builder`,
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: options.autoIndex,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      useUnifiedTopology:true,
      socketTimeoutMS: 300000
    }
  },
  jwtSecret: 'adb12332'
}
