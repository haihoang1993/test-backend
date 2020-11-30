import { User } from '../models'
import errorUtil from "../utils/error";
import responseBuilder from "../utils/response-builder";
import jwt from "jsonwebtoken";
import { getToken } from "../helpers/jwt";
import configs from "../configs";
import { Trace } from "../helpers/Log";
import { sessionLocale, userLocale } from "../locales";
import Joi from "joi";

module.exports = {
    isVerified: async (req, res, next) => {
        try {
            let { user: u } = req
            if (!u) {
                console.log('error:', u);
                return res.status(404).jsonp(responseBuilder.build(false, {}, userLocale.userNotFound.message))
            }
            let { _id } = u
            let user = await User.findById(_id, { __v: 0, hash_password: 0, last_pass_change_time: 0, _id: 0 })

            if (!user) {
                console.log('not user');
                return res.status(404).jsonp(
                    responseBuilder.build(
                        false,
                        {},
                        userLocale.userNotFound.message
                    )
                )
            } else if (user) {
                if (!user.is_verified) {
                    console.log('not verify');
                    return res.status(400).jsonp(
                        responseBuilder.build(false, {}, userLocale.userNotVerify.message)
                    )
                    //util.setError(404, 'User not verify. Please verify user.');
                    //return util.send(res);
                } else {
                    next();
                }
            }
        } catch (error) {
            return res.status(500).jsonp(
                responseBuilder.build(false, {}, errorUtil.parseError(error))
            )
        }
    },
    isAuth: (req, res, next) => {
        let payload = getToken(req)
        Trace(req.path)
        Trace(payload)

        jwt.verify(payload, configs.jwtSecret, async function (err, decoded) {
            if (err) {
                req.user = undefined;
                return res.status(401).jsonp(
                    responseBuilder.build(
                        false,
                        {},
                        err.message.indexOf('expired') !== -1 ?
                            sessionLocale.sessionHasExpired.message :
                            errorUtil.parseError(err)
                    )
                )
                //util.setError(401, err.message.indexOf('expired') !== -1 ? 'Session has expired.' : err.message);
                ////Trace(err.message, true)
                //return util.send(res);
            }

            Trace(decoded);
            let user = await User.findById(decoded._id, { __v: 0, hash_password: 0, last_pass_change_time: 0, _id: 0 })
            if (!user) {
                return res.status(401).jsonp(
                    responseBuilder.build(
                        false,
                        {},
                        userLocale.userNotFound.message
                    )
                )
                //util.setError(401, 'Authentication failed. User not found.');
                //return util.send(res);
            } else if (user) {
                if (user.last_pass_change_time > decoded.created_at) {
                    return res.status(401).jsonp(
                        responseBuilder.build(
                            false,
                            {},
                            userLocale.passChange.message
                        )
                    )
                    //util.setError(401, 'Authentication failed. Password has been changed.');
                    //return util.send(res);
                } else {
                    req.user = decoded;
                    next();
                }
            }
        });
    }
};
