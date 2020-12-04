import { Router } from 'express'
import controler from './packages/users/controler';
import usersRoute from './packages/users/route';
import { isAuth, isVerified } from "./middleware/auth";



export default () => {
    console.log('route:')
    const router = Router();

    router.use('/users', [isAuth], usersRoute);


    /**
   * @swagger
   * /login:
   *   post:
   *     description: Login to the application
   *     tags: [Login]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         description: User's Username.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           type: object
   */
    router.post('/login', controler.loginUser);

    /**
   * @swagger
   * /register:
   *   post:
   *     description: Login to the application
   *     tags: [Register]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: name
   *         description: User's Username.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           type: object
   */
    router.post("/register", controler.registerUser);

    router.use('*', function (req, res) {
        //util.setSuccess(200, 'Welcome to this API.');
        //return util.send(res);
        res.jsonp({ test: 'Welcome to this API test backend dev' })
    });
    return router;
}
