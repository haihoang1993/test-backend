import { mongoose } from '../utils/mongoose'
import config from '../configs'
import env from '../utils/env';

export default async function () {
    console.log('db init:')
    mongoose.set('debug', env.isDevelopment())
    try {
        const options = {
            autoIndex: !!global.isIndexesServer,
            useUnifiedTopology:false,
        }
        await mongoose.connect(config.db, config.dbOptions(options))
        console.log('on connecting to db done: ')
    } catch (error) {
        console.log('Error on connecting to db: ', error)
        console.log('\x1b[31m', '*** PLEASE CONNECT TO DATABASE BEFORE RUN SERVER', '\x1b[0m')
        process.exit(1)
    }
}
