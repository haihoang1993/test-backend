import { Router } from 'express'
import controler from './packages/users/controler';
import usersRoute from './packages/users/route';
import webRoute from './packages/web/route';
import { apiRoute } from './packages';
import { isAuth, isVerified } from "./middleware/auth";
const env = process.env.NODE_ENV;


export default () => {
    console.log('route:')
    const router = Router();

    router.use('/users', [isAuth], usersRoute);
    router.use('/web', webRoute);
    router.post('/login', controler.loginUser);
    router.post("/register", controler.registerUser);
    router.get('/test', (req, res) => {
        res.jsonp({ test: 'hai' })
    })
    router.use('/api',apiRoute)
    router.get('/', function (req, res) {
        //util.setSuccess(200, 'Welcome to this API.');
        //return util.send(res);
        res.jsonp({ test: 'Welcome to this API test backend.1', env, name: "hai test v2" })
    });
    return router;
}
