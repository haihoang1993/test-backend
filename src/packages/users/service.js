import repo from './repository'
import Joi from 'joi';
import { userLocale } from "../../locales";

async function registerUser(req) {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),//.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            confirm_pass: Joi.ref('password'),
        }).with('password', 'confirm_pass');
        const { error } = schema.validate(req.body);
        if (error) {
            console.log('error:', error);
            return [error, null]
        }
        let { email } = req.body;
        email = email.toLowerCase()
        let user = await repo.findOneBy({ email: email });
        console.log(email, user)
        if (user) return [userLocale.userExisted, null];

        user = await repo.createUser(req.body)
        console.log(email, user)
        return [null, {
            name: user.name,
            email: user.email
        }];
    } catch (error) {
        error.statusCode = 500
        return [error, null]
    }
}

async function loginUser(req) {
    try {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),//.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            remember: Joi.bool(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            console.log('error:', error);
            return [error, null]
        }
        let { email, password, } = req.body;
        email = email.toLowerCase()
        let user = await repo.findOneBy({ email: email });
        console.log('login ', email, user)
        if (!user) return [userLocale.notFound, null];
        if (!user.comparePassword(password)) return [userLocale.wrongEmailOrPassword, null];

        return [null, {
            token: await repo.createToken(user, req.body)
        }];
    } catch (error) {
        error.statusCode = 500
        return [error, null]
    }
}

async function getOneUser(req) {
    try {
        let { _id } = req.user
        if (!_id) return [userLocale.notFound, null]

        let user = await repo.findByID(_id, { __v: 0, hash_password: 0, last_pass_change_time: 0, _id: 0 });
        console.log('getOneUser ', req.user, user)
        if (!user) return [userLocale.notFound, null];

        return [null, user];
    } catch (error) {
        error.statusCode = 500
        return [error, null]
    }
}

async function updateOneUser(req) {
    try {
        let { user, body } = req
        if (!user) return [userLocale.notFound, null]

        let u = await repo.updateUser({ _id: user._id }, body);
        console.log('updateOneUser ', req.user, u)

        return [null];
    } catch (error) {
        error.statusCode = 500
        return [error, null]
    }
}

async function uploadAvatarUser(req) {
    try {
        let { user } = req
        if (!user) return [userLocale.notFound, null]
        let data = {
            updated_at: Date.now(),
            avatar: req.file.path
        }
        let u = await repo.updateUser({ _id: user._id }, data);
        console.log('uploadAvatarUser ', u)

        return [null, data];
    } catch (error) {
        error.statusCode = 500
        return [error, null]
    }
}

export default {
    registerUser,
    loginUser,
    getOneUser,
    updateOneUser,
    uploadAvatarUser,
}
