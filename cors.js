const whitelist = ['http://localhost:300']
const cors = require('cors')

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

export default (app)=>{
    app.use(cors(corsOptions))
}
